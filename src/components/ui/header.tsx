import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./input";

export default function Header () {
    return (
      <section className="bg-zinc-900 p-3 sticky top-0">  
        <div className="flex justify-between items-center flex-wrap p-2 px-3 h-15 
                        border border-white rounded-xl ">
            <Link href={"./"}>
            <div className="flex items-center gap-1 text-red-500 text-2xl font-bold font-sans ">
              <TbBrandYoutubeFilled className="h-7 w-7" />
              You Tube
            </div></Link>
            <div className="flex items-center border border-white rounded-lg px-1">
              <Search className="text-white h-4 w-4"/>
              <Input placeholder="Search Videos" className="text-white border-transparent w-20 h-6 " />
            </div>
        </div>
      </section>  
    );
};