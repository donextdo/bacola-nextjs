// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";

// export const SearchItem = () => {
//   const [searchItem, setSearchItem] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     // e.preventDefault();
//     // const response = await fetch(
//     //   `https://example.com/api/search?q=${searchItem}`
//     // );
//     // const data = await response.json();
//     // handle search results
//     // setSearchResults(data);
//     // console.log(data);
//     alert("Search button clicked! " + searchItem);
//   };

//   return (
//     <div className="relative flex flex-row h-[4rem]">
//       <input
//         type="search"
//         className="bg-gray-200 rounded-tl rounded-bl h-full w-full pl-5 text-sm focus:outline-none"
//         placeholder="Search for product..."
//         value={searchItem}
//         onChange={(e) => setSearchItem(e.target.value)}
//         onClick={handleSubmit}
//       />
//       <div
//         className="bg-gray-200 rounded-br rounded-tr h-full w-[4rem]  flex items-center justify-center hover:cursor-pointer"
//         onClick={handleSubmit}
//       >
//         <FiSearch type="submit" className="h-8 w-8 text-blue-900 " />
//       </div>
//       {/* {searchResults.length > 0 ? (
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>{result.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found.</p>
//       )} */}
//     </div>
//   );
// };
// //invisible md:visible
