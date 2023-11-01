import React from "react";
import MenuPosts from "../ui/menuPosts";
import MenuCategories from "../ui/menuCategories";

const Menu = () => {
  return (
    <div className="flex-2 mt-16">
      <h2 className="text-gray-500 text-base font-normal">{"What's hot"}</h2>
      <h1 className="text-[28px]">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-gray-500 text-base font-normal">Discover by topic</h2>
      <h1 className="text-[28px]">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500 text-base font-normal">Chosen by the editor</h2>
      <h1 className="text-[28px]">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
