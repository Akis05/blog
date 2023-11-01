import CardList from "@/core/components/sections/cardList";
import Menu from "@/core/components/sections/menu";
import React from "react";

const BlogPage = () => {
  return (
    <div className="">
      <h1 className="bg-[#FF7F50] text-white text-2xl font-bold py-1 px-3 text-center capitalize">
        Blog
      </h1>
      <div className="flex gap-14">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
