import { Compass, Home, Menu, User } from "lucide-react";
import Link from "next/link";

export default function BottomNavigation () {
    return (
        <div className="flex flex-wrap items-center justify-around h-14 
                        fixed bottom-0 w-[100vw] bg-zinc-900 text-white">
            <Link href={"/"}><Home /> </Link>
            <Link href={"/"}><Compass /> </Link>
            <Link href={"/"}><Menu /> </Link>
            <Link href={"/"}><User /> </Link>
        </div>
    );
};