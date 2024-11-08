import { ClothCard } from "../components/ClothCard";
import { InfoComp } from "../components/InfoComp";
import { MainButton } from "../components/MainButton";
import { TopBar } from "../components/TopBar";
import { fashionData } from "../data/fashionData";

const HelperFunction = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center px-0">
      {fashionData.map((item, index) => (
        <ClothCard
          post_number={item.post_number}
          img_url={item.img_url}
          shirt_branded={item.shirt_branded}
          shirt_budget={item.shirt_budget}
          pant_branded={item.pant_branded}
          pant_budget={item.pant_budget}
          watch_branded={item.watch_branded}
          watch_budget={item.watch_budget}
          tshirt_branded={item.tshirt_branded}
          tshirt_budget={item.tshirt_budget}
          jacket_budget={item.jacket_budget}
          shoes_budget={item.shoes_budget}
          jacket_branded={item.jacket_branded}
          shoes_branded={item.shoes_branded}
        />
      ))}
    </div>
  );
};

export const Home = () => {
  return (
    <div className="mb-5">
      <TopBar />
      <MainButton label={"Search Post"} buttonCheck={"search"} to={"/search"} />
      <InfoComp />
      <HelperFunction />
    </div>
  );
};
