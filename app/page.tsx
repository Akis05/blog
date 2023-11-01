import Menu from "@/core/components/pages/Menu";
import CardList from "@/core/components/pages/cardList";
import CategoryList from "@/core/components/pages/categoryList";
import Featured from "@/core/components/pages/featured";

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
