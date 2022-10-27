import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listingItem, setListingItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((r) => r.json())
      .then((listing) => setListingItems(listing));
  }, [])

console.log(listingItem)

  return (
    <main>
      <ul className="cards">
        {listingItem.map((item) => {
          <ListingCard key={item.id} item={item} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
