import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2 className = 'm-2 h-15 w-50 bg-amber-400 text-white flex justify-center items-center rounded-2xl cursor-pointer hover:bg-black hover:scale-105 transition'>Hello nice to meet you</h2>
      <Button>Subscribe</Button>
    </div>
  );
}
