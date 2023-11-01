import React from "react";
import Card from "../ui/card";
import Pagination from "../ui/pagination";
 
const CardList = () => {
  return (
    <div className="flex-5 ">
      <h1 className="py-12 px-0">Recent Posts</h1>
      <div className="">
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
