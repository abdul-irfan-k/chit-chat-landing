import Demo from "@/components/Demo";
import CallFeatures from "@/components/Features/call-features";
import Features from "@/components/Features/chat-features";
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
      <CallFeatures />
      {/* <Technologies /> */}
      <Footer />
    </div>
  );
}
