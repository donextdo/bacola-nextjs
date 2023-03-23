import React, { useState, useEffect } from "react";
import { SearchItem } from "@/components/Search/Search";
import { ItemList } from "@/components/ItemList/ItemList";
import { data } from "@/dummy_data/Items";

export default function Home() {
  const [items, setItems] = useState<Array<Object>>([]);

  useEffect(() => {
    setItems(data);
    return () => {
      setItems([]);
    };
  }, []);

  return (
    <div>
      <div className="m-8 search-bar ">
        <SearchItem />
      </div>
      <div>
        <ItemList itemsList={items} />
      </div>
    </div>
  );
}
