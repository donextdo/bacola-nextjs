import React from "react";
import { SearchItem } from "@/components/Search/Search";
import ItemList from "@/components/ItemList/ItemList";

export default function Home() {
  return (
    <div>
      <div className="m-8  search-bar">
        <SearchItem />
      </div>
      <div>
        <ItemList />
      </div>
    </div>
  );
}
