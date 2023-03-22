import React, { useState, useEffect } from "react";
import { CartItem } from "@/components/CartItem/CartItem";
import meal1 from "../../asserts/meal1.jpg";
import meal2 from "../../asserts/meal2.jpg";
import meal3 from "../../asserts/meal3.jpg";
import meal4 from "../../asserts/meal4.png";

export default function ItemList() {
  const [items, setItems] = useState<Array<Object>>([]);

  useEffect(() => {
    const data: Array<Object> = [
      {
        isRecommended: true,
        isDiscount: true,
        isOrganic: false,
        isFavourite: true,
        discount: 23,
        rating: 4,
        image: meal1,
        title: "All Natural Italian-Style Chicken Meatballs",
        isAvailable: true,
        price: 49.99,
      },
      {
        isRecommended: false,
        isDiscount: true,
        isOrganic: false,
        isFavourite: true,
        discount: 24,
        rating: 4,
        image: meal2,
        title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        isAvailable: true,
        price: 49.99,
      },
      {
        isRecommended: false,
        isDiscount: true,
        isOrganic: true,
        isFavourite: false,
        discount: 19,
        rating: 4,
        image: meal3,
        title: "Field Roast Chao Cheese Creamy Original",
        isAvailable: true,
        price: 49.99,
      },
      {
        isRecommended: false,
        isDiscount: false,
        isOrganic: false,
        isFavourite: false,
        discount: 0,
        rating: 4,
        image: meal4,
        title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        isAvailable: true,
        price: 49.99,
      },
    ];
    setItems(data);
    return () => {
      setItems([]);
    };
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2 px-4">
        {items.map((item: any, index) => {
          return (
            <CartItem
              key={index}
              isRecommended={item?.isRecommended}
              isDiscount={item?.isDiscount}
              isOrganic={item?.isOrganic}
              isFavourite={item?.isFavourite}
              discount={item?.discount}
              rating={item?.rating}
              image={item?.image}
              title={item?.title}
              isAvailable={item?.isAvailable}
              price={item?.price}
            />
          );
        })}
      </div>
    </div>
  );
}
