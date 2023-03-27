import React, { useState, useEffect, FC } from "react";
import { CartItem } from "@/components/CartItem/CartItem";

interface ComponentProps {
  itemsList: Array<Object>;
}

export const ItemList: FC<ComponentProps> = ({ itemsList }) => {
  return (
    <div className="container mx-auto lg:max-w-[885px] md:max-w-[670px]">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-4 ">
        {itemsList.map((item: any, index) => {
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
};
