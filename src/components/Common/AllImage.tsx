import { ImageOne, ImageTwo, ImageThree, ImageFour } from "./ImageList";
import { AdditionalDiv } from "./redDiv";

export const TopImage = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <ImageOne />
      <ImageTwo />
    </div>
  );
};

export const BottomImage = () => {
  return (
    <div className="lg:hidden ">
      <ImageThree />
      <ImageFour />
      <AdditionalDiv />
    </div>
  );
};
