import { useEffect, useState } from "react";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getUserAsync } from "@/features/User/userSlice";


const Bill = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user.user);
    console.log(userData)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [country, setCountry] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [townCity, setTownCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    let id = localStorage.getItem("id");

    useEffect(() => {
        dispatch(getUserAsync(id));
      }, [dispatch,id]);

    const handleSave = async () => {
        const userDataObj = {
            
            "billingAddress": {
                billingFirstName: firstName,
                billingLastName: lastName,
                billingCompanyName: companyName,
                country: country,
                street: streetAddress,
                apartment: apartment,
                town: townCity,
                state: state,
                zipCode: zipCode,
                billingPhone: phone,
                billingEmail: email,
            }
          };

          console.log(userDataObj)
        try {
            const response = await axios.patch(`${baseUrl}/users/${id}`, userDataObj);
            console.log(response.data); // do something with the response data
        } catch (error) {
            console.log(error); // handle the error
        }
    };


    return (
        <div className="container mx-auto px-40 mt-10">
            <h2 className="font-semibold mb-2">BILLING ADDRESS</h2>
            <hr className="mb-4" />

            <label className="text-sm">First Name *</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={userData?.billingAddress.billingFirstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="text-sm">Last Name *</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={userData?.billingAddress.billingLastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <label className="text-sm">Company Name (optional)</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={userData?.billingAddress.billingCompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
            />

            <label className="text-sm">Country / Region *</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={userData?.billingAddress.country}
                onChange={(e) => setCountry(e.target.value)}
            />

            <label className="text-sm">Street address *</label>
            <input type="text" className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-2" placeholder="House number and street name" value={userData?.billingAddress.street} onChange={(e) => setStreetAddress(e.target.value)} />
            <input type="text" className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4 " placeholder="Apartment, suite, unite, etc. (optional)" value={userData?.billingAddress.apartment} onChange={(e) => setApartment(e.target.value)} />

            <label className="text-sm">Town / City *</label>
            <input type="text" className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4" value={userData?.billingAddress.town} onChange={(e) => setTownCity(e.target.value)} />

            <label className="text-sm">State *</label>
            <input type="text" className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4" value={userData?.billingAddress.state} onChange={(e) => setState(e.target.value)} />

            <label className="text-sm">Zip Code *</label>
            <input type="text" className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4" value={userData?.billingAddress.zipCode} onChange={(e) => setZipCode(e.target.value)} />

            <label className="text-sm">Phone *</label>
            <input type="text" className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4" value={userData?.billingAddress.billingPhone} onChange={(e) => setPhone(e.target.value)} />

            <label className="text-sm">Email address *</label>
            <input type="text" className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4" value={userData?.billingAddress.billingEmail} onChange={(e) => setEmail(e.target.value)} />


            <button className="bg-[#233a95] text-white py-2.5 px-4 mb-4 rounded-md text-sm" onClick={handleSave}>Save Changes</button>

        </div>
    );
}

export default Bill;