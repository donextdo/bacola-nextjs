import { ProductList } from "@/features/product/ProductList";
import { TopImage, BottomImage } from "./AllImage";
import { MainDiv } from "./MainDiv";
import { BestSeller, NewProduct, RedDiv, TakeCare } from "./redDiv";

const HomePage = () => {
  return (
    <div className="lg:flex lg:flex-row lg:mb-9">
      <div className="lg:w-1/4 ">
        <MainDiv />
      </div>
      <div className="md:ml-5 lg:w-3/4 md:w-full w-full">
        <div>
          <BestSeller />
          <ProductList />
        </div>
        <TakeCare />
        {/* <RedDiv /> */}
        <div>
          <NewProduct />
          <ProductList />
        </div>
        <div>
          <TopImage />
          <BottomImage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// export default function Home() {
//     return (
//       <div className="xl:px-40 lg:px-5 md:px-10 px-5 ">
//         {/* <Header /> */}
//         <div className="bg-yellow-300">
//           <HomeSlider />
//         </div>

{
  /* <div className="lg:flex lg:flex-row lg:mb-9">
          <div className="lg:w-1/4 invisible lg:visible">
            <MainDiv />
          </div>
          <div className="mt-4 lg:w-3/4 w-full"> */
}
{
  /* <div className="bg-pink-500">
              <BestSeller />
              <ProductList
              title={"Best Seller"}
              description={
                "Do not miss the current offers until the end of March."
              }
              showImage={true}
              /> */
}
{
  /* </div>
            <TakeCare />
            <RedDiv />
            <div>
              <NewProduct />
              <ProductList */
}
{
  /* // title={"NEW PRODUCTS"}
              // description={"New products with updated stocks."}
              // showImage={false}
              /> */
}
{
  /* </div>
            <div> */
}
{
  /* <AllImage /> */
}
{
  /* <MainDiv /> */
}
{
  /* </div>
          </div>
        </div> */
}
{
  /* <CartList />
      </div>
    );
//   } */
}
