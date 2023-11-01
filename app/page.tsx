import Menu from "@/core/components/pages/Menu";
import CardList from "@/core/components/sections/cardList";
import CategoryList from "@/core/components/sections/categoryList";
import Featured from "@/core/components/sections/featured";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <div className="flex gap-14">
        <CardList />
        <Menu />
      </div>
    </main>
  );
}
