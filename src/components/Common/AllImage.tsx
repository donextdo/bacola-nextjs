import { ImageOne, ImageTwo, ImageThree, ImageFour } from "./ImageList";
import { AdditionalDiv } from "./redDiv";

export const TopImage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
