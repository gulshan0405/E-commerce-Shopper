import new_collection from "../assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div style={{marginTop:"40px"}} className="newcollection flex flex-col items-center gap-4 mb-24 px-4 sm:px-6 lg:px-12">
      {/* Title Section */}
      <h1 className="text-[#171717] text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
        NEW COLLECTION
      </h1>
      <hr className="w-24 sm:w-32 lg:w-48 h-1.5 rounded-lg bg-[#252525]" />

      {/* Items Section */}
      <div className="collections grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {new_collection.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
