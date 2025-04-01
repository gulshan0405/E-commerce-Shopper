import { useEffect, useState } from "react";
import Item from "../Item/Item";

const NewCollection = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNewCollection(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      style={{ marginTop: "40px" }}
      className="newcollection flex flex-col items-center gap-4 mb-24 px-4 sm:px-6 lg:px-12"
    >
      {/* Title Section */}
      <h1 className="text-[#171717] text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
        NEW COLLECTION
      </h1>
      <hr className="w-24 sm:w-32 lg:w-48 h-1.5 rounded-lg bg-[#252525]" />

      {/* Items Section */}
      <div className="collections grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {newCollection.length > 0 ? (
          newCollection.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No items available
          </p>
        )}
      </div>
    </div>
  );
};

export default NewCollection;
