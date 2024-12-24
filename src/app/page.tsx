// import Image from "next/image";
import BottomNavigation from "@/components/ui/bottom-navigation";
import CardCustom from "@/components/ui/card-custom";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
    <Header />
      <div className="m-2 ">  
        <div className="flex ">
          <CardCustom />
          <CardCustom />
        </div>
        <div className="flex ">
          <CardCustom />
          <CardCustom />
        </div>  
        <div className="flex ">
          <CardCustom />
          <CardCustom />
        </div>  
      </div>
    <BottomNavigation/>
    </>
  );
}
