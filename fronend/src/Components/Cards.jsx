import React from "react";

const Cards = ({ item }) => {

  return (
    <>
      <div className="p-3 my-3 mt-4 transition duration-300 transform shadow-sm cursor-pointer card bg-base-100 w-92 hover:scale-105 hover:shadow-xl">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary ">{item.category}</div>
          </h2>
          <p>
             {item.title}
          </p>
          <div className="justify-between card-actions">
            <div className="badge badge-outline">{item.price}</div>
            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white duration-200 "> Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
