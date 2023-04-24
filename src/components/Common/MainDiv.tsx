import { ImageOne, ImageTwo, ImageThree, ImageFour } from "./ImageList";
import { AdditionalDiv } from "./redDiv";

export const MainDiv = () => {
  return (
    <div className="hidden lg:block">
      <ImageThree />
      <ImageFour />
      <AdditionalDiv />
    </div>
  );
};
