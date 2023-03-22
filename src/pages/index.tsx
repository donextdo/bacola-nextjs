import React from "react";
import { CartItem } from "@/components/cartItem";
//import { SearchItem } from "@/components/search";
import ItemList from "@/components/itemList";

export default function Home() {
  return (
    <div>
      {/* <div className="m-8  search-bar">
        <SearchItem />
      </div> */}
      <div>
        <ItemList />
      </div>
    </div>
  );
}
