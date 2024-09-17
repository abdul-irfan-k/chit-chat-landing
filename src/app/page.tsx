import Demo from "@/components/Demo";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-[200vh]">
      <Demo />
      <Navbar />
    </div>
  );
}
