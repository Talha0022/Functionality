import { Search } from "lucide-react";
import { Input } from "./input";

export default function Header () {
    return (
        <div className="">
            <div className="">
                You Tube
            </div>
            <div>
                <Search/>
                <Input placeholder="Search Videos" className="space-x-4" />
            </div>
        </div>
    )
}