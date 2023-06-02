import SidebarFilter from "@/components/Pagination/SidebarFilter";
import Terms from "@/components/Terms/Terms";
import { useState } from "react";
import bevarage from "../../assets/categary/bevarage.jpg";
import breads from "../../assets/categary/breads.jpg";
import buscuits from "../../assets/categary/buscuits.jpg";
import dairy from "../../assets/categary/dairy-1.jpg";
import frozenfoods from "../../assets/categary/frozenfoods.png";
import fruitvegetables from "../../assets/categary/fruitvegetables.jpg";
import Image from "next/image";

const ProductPopup = ({ setProductPopup, itemId }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    fruitvegetables,
    bevarage,
    breads,
    buscuits,
    dairy,
    frozenfoods,
    // Add more photo URLs here
  ];
  const [selectedImage, setSelectedImage] = useState(photos[0]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + photos.length) % photos.length);
  };

  const handleImageClick = (index:any) => {
    setSelectedImage(photos[index]);
  };

  return (
    <div className="">
      <div className="flex gap-2">
        <button className="arrow left" onClick={prevSlide}>
          &lt;
        </button>
        <div className="flex gap-4">
          {photos.slice(currentSlide, currentSlide + 3).map((photo, index) => (
            <div
            key={index}
            className={`h-[95px] ${selectedImage === photo ? 'border border-red-500' : 'border '}`}
            onClick={() => handleImageClick(currentSlide + index)}
          >
            <Image
              src={photo}
              alt="item1"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <div  className="h-[300px]">
              <Image
                src={selectedImage}
                alt="item1"
                style={{
                  objectFit: "contain",
                  backgroundColor: "white",
                  width: "100%",
                  height: "100%",
                }}
                width={450}
                height={400}
              />
            </div>
        </div>
      )}
    </div>
  );
};

export default ProductPopup;
