import Image from "next/image";
import { FC, JSXElementConstructor, ReactElement, ReactFragment, useEffect, useState } from "react";
import propic from "../../../../assets/66bb43111be7a320df1ed27c2945483c.jpg"
import axios from "axios";
import baseUrl from "../../../../utils/baseUrl";
import UserProfile from "./UserProfile ";
import { FaStar } from "react-icons/fa";
import StartRating from "./ReviewDetails/StartRating";
import DateFormatChange from "./ReviewDetails/DateFormatChange";

interface Review {
    rating: number;
    name:string;
    body:string;
    submittedDate: string;
    _id:string;
    // other properties
  }

const Review = ({ itemId }: any) => {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");
    const [savedText, setSavedText] = useState("");
    const [review, setReview] = useState<Array<any>>([]);
    const [data, setData] = useState<Array<Review>>([])
    let id = localStorage.getItem("id");



    let email: string | null;
    let username;
    let extractedUsername: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined;

    // review name
    if (localStorage.getItem('email') !== null) {
        email = localStorage.getItem('email');
        console.log(email)
        if (email !== null) {
            username = email.split('@')[0]; // Extract the username from the email
            extractedUsername = username.replace(/"/g, '');
        } else {
            // Handle the case when the email value is null
        }
    } else {
        // Handle the case when the value is null
        // For example, you could set a default value      
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/reviews/getReview/${itemId}`);
            console.log(res)
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    // submit savetext
    const handleSubmit = async () => {
        setSavedText(text);
        setText("");

        const data = {
            body: savedText,
            name: extractedUsername,
            rating: 4,
            userId: id,
            productId:itemId
        }
        console.log(data)
        // setReview([...review, data])
        try {
            const response = await axios.post(`${baseUrl}/reviews/insert`, data);
            console.log(response.data); // do something with the response data
        } catch (error) {
            console.log(error); // handle the error
        }
    };

    // star rating
    const handleRatingChange = (event: any) => {
        setRating(Number(event.target.value));
        console.log(rating)
        console.log(`Selected rating: ${rating}`);
    };

    // review body
    const handleTextChange = (event: any) => {
        setText(event.target.value);
    };



    return (
        <div>
            <h1> REVIEW FOR ALL NATURAL ITALIAN-STYLE CHICKEN MEATBALLS</h1>
            {data.map((review) => (
                <div className="flex mt-4" key={review._id}>
                    <div className="h-10 w-10 rounded-full bg-[#233a95] flex items-center justify-center text-white text-xl">
                        {/* <Image
                        src={propic}
                        alt="item1"
                        style={{
                            objectFit: "contain",
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                        }}
                        width={450}
                        height={400}
                    /> */}
                        <UserProfile email={email} />
                    </div>
                    <div className="ml-[15px] space-y-1.5">
                        <div>
                            <StartRating rating={review.rating} />

                        </div>
                        <h1>{review.name} - <span className="text-xs text-[#71778e]"> <DateFormatChange newDate={review.submittedDate} /></span></h1>
                        <p className="text-[13px]">{review.body}</p>
                    </div>
                </div>
            ))}

            <h1 className="text-lg mt-10 mb-2.5">Add a review</h1>
            <hr />
            <h4 className="mt-6 text-[13px]">Your rating *</h4>
            <div className="flex">

            {[1, 2, 3, 4, 5].map((ratingValue) => (
        <label key={ratingValue}>
          <input
            type="radio"
            name="rating"
            value={ratingValue}
            checked={ratingValue === rating}
            onChange={handleRatingChange}
            className="hidden"
          />
          <FaStar
            className="star"
            color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
          />
        </label>
      ))}
            </div>
            <h4 className="mt-3 mb-2 text-[13px]">Your review *</h4>
            <textarea className="w-full h-60 bg-gray-100 rounded-sm px-4" value={text}
                onChange={handleTextChange}></textarea>
            <button onClick={handleSubmit} className="px-4 py-2 bg-[#233a95] text-white text-sm mt-4 rounded-md cursor-pointer w-[90px]">
                Submit
            </button>

        </div>
    );
}

export default Review;