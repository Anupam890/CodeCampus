import Navbar from "@/components/Navbar";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import Features from "@/components/Home/Features";
import InfoZigZag from "@/components/Home/Zigzag";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Home/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen bg-black flex flex-col items-center justify-center text-center px-4">
        <DotPattern className="absolute inset-0 text-purple-500 opacity-30" />
        <div className="relative z-10 space-y-4">
          s
          <h1 className="text-purple-300 text-4xl md:text-6xl font-semibold">
            Dream Big. Prepare Smart. Achieve More.
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Ace every interview round with curated resources, real questions,
            and structured prep—all in one platform.
          </p>
          <Button
            asChild
            className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-5 rounded-lg shadow-lg"
          >
            <Link href="/sign-in">Get Started</Link>
          </Button>
        </div>
      </div>
      <Features/>
      <InfoZigZag />
      <Testimonials/>
      <Footer/>

    </>
  );
}
