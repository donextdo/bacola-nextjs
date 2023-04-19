import Image from "next/image";
import { JSXElementConstructor, ReactElement, ReactFragment, useState } from "react";
import propic from "../../../../assets/66bb43111be7a320df1ed27c2945483c.jpg"
import axios from "axios";
import baseUrl from "../../../../utils/baseUrl";
import UserProfile from "./UserProfile ";

const Review = () => {
    const [rating, setRating] = useState(0);
    const [showRating, setShowRating] = useState(false);
    const [text, setText] = useState("");
    const [savedText, setSavedText] = useState("");
    const [review, setReview] = useState<Array<any>>([]);
    
    let email;
    let username;
    let extractedUsername: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined;

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


    const handleClick = (value: any) => {
        setRating(value);

    };

    const handleSubmit = async () => {
        setShowRating(true);
        setSavedText(text);
        setText("");

        const data = {
            body: savedText,
            name:extractedUsername,
            rating:getStarRating(), 
        }
        setReview([...review, data])
        try {
            const response = await axios.post(`${baseUrl}/reviews/insert`, review);
            console.log(response.data); // do something with the response data
        } catch (error) {
            console.log(error); // handle the error
        }
    };

    const getStarRating = () => {
        let stars = '';
        for (let i = 1; i <= rating; i++) {
            stars += '★';
        }
        return stars;
    };

    const handleTextChange = (event: any) => {
        setText(event.target.value);
    };
    return (
        <div>
            <h1> REVIEW FOR ALL NATURAL ITALIAN-STYLE CHICKEN MEATBALLS</h1>

            <div className="flex mt-4">
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
                        {showRating && (
                            <p className="text-md text-yellow-400">{getStarRating()}</p>
                        )}
                    </div>
                    <h1>{extractedUsername} - <span className="text-xs text-[#71778e]">April 25,2023</span></h1>
                    <p className="text-[13px]">{savedText}</p>
                </div>
            </div>

            <h1 className="text-lg mt-10 mb-2.5">Add a review</h1>
            <hr />
            <h4 className="mt-6 text-[13px]">Your rating *</h4>
            <div>
                {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                        <span
                            key={i}
                            className={`text-xl text-gray-400 cursor-pointer ${ratingValue <= rating ? 'text-yellow-400' : ''}`}
                            onClick={() => handleClick(ratingValue)}
                        >
                            ★
                        </span>
                    );
                })}
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