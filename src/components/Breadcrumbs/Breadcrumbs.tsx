// import { useRouter } from "next/router";

// const Breadcrumbs = () => {
//   const router = useRouter();
//   const pathSegments = router.asPath
//     .split("/")
//     .filter((segment) => segment !== "");

//   return (
//     <nav>
//       <ul className="font-ff-headings text-[15px] font-semibold ">
//         <li>
//           <a href="/">Home</a>
//         </li>
//         {pathSegments.map((segment, index) => (
//           <li key={index}>
//             <a href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
//               {segment}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;
