import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-[200vh]">
      <Navbar />
      <Demo />
      <Features />
      {/* <Technologies /> */}
      <Footer />
    </div>
  );
}
