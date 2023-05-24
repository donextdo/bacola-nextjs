import { ProductList } from "@/features/product/ProductList";
import { TopImage, BottomImage } from "./AllImage";
import { MainDiv } from "./MainDiv";
import { BestSeller, NewProduct, RedDiv, TakeCare } from "./redDiv";
import { useState } from "react";


const HomePage = () => {
  const [productPopup, setProductPopup] = useState(false);

  return (
    <div className="lg:flex lg:flex-row lg:mb-9">
      <div className="lg:w-1/4 ">
        <MainDiv />
      </div>
      <div className="md:ml-5 lg:w-3/4 md:w-full w-full">
        <div>
          <BestSeller />
          <ProductList productPopup={productPopup} setProductPopup={setProductPopup}/>
        </div>
        <TakeCare />
        {/* <RedDiv /> */}
        <div>
          <NewProduct />
          <ProductList productPopup={productPopup} setProductPopup={setProductPopup}/>
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
