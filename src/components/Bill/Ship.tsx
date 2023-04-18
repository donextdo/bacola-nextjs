import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../../utils/baseUrl";

const Ship = () => {
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
        fetchData()
    }, []);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/users/${id}`);
            console.log(res.data)
            const data = res.data;
            setFirstName(data.shippingAddress.shippingFirstName);
            setLastName(data.shippingAddress.shippingLastName);
            setCompanyName(data.shippingAddress.shippingCompanyName);
            setCountry(data.shippingAddress.country)
            setStreetAddress(data.shippingAddress.street)
            setApartment(data.shippingAddress.apartment)
            setTownCity(data.shippingAddress.town)
            setState(data.shippingAddress.state)
            setZipCode(data.shippingAddress.zipCode)
            setPhone(data.shippingAddress.shippingphone)
            setEmail(data.shippingAddress.shippingEmail);


        } catch (err) {
            console.log(err);
        }
    }

    const handleSave = async () => {
        const data = {
            
            "shippingAddress": {
               shippingFirstName: firstName,
               shippingLastName: lastName,
               shippingCompanyName: companyName,
                country: country,
                street: streetAddress,
                apartment: apartment,
                town: townCity,
                state: state,
                zipCode: zipCode,
                shippingphone: phone,
               shippingEmail: email,
            }
          };
        try {
            const response = await axios.patch(`${baseUrl}/users/${id}`, data);
            console.log(response.data); // do something with the response data
        } catch (error) {
            console.log(error); // handle the error
        }
    };

    return ( 
        <div className="container mx-auto px-40 mt-10">
                    <h2 className="font-semibold mb-2">SHIPPING ADDRESS</h2>
                    <hr className="mb-4"/>


                    <label className="text-sm">First Name *</label>
            <input
                type="text"
                className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4 "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="text-sm">Last Name *</label>
            <input
                type="text"
                className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <label className="text-sm">Company Name (optional)</label>
            <input
                type="text"
                className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
            />

            <label className="text-sm">Country / Region *</label>
            <input
                type="text"
                className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />

            <label className="text-sm">Street address *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-2 px-4" placeholder="House number and street name" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4" placeholder="Apartment, suite, unite, etc. (optional)" value={apartment} onChange={(e) => setApartment(e.target.value)} />

            <label className="text-sm">Town / City *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4" value={townCity} onChange={(e) => setTownCity(e.target.value)} />

            <label className="text-sm">State *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4" value={state} onChange={(e) => setState(e.target.value)} />

            <label className="text-sm">Zip Code *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />

            <label className="text-sm">Phone *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label className="text-sm">Email address *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4" value={email} onChange={(e) => setEmail(e.target.value)} />


            <button className="bg-[#233a95] text-white py-2.5 px-4 mb-4 rounded-md text-sm" onClick={handleSave}>Save Changes</button>

        </div>
     );
}
 
export default Ship;