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
        <div className="relative z-10 space-y-6 max-w-2xl">
          <h1 className="text-purple-300 text-4xl md:text-6xl font-semibold">
            Revolutionize Hiring with AI-Powered Recruitment
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Say goodbye to manual hiring. Our AI-driven platform automates job posts, filters top talent, ranks candidates, and schedules interviews — all from one smart dashboard.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            <Button
              asChild
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg shadow-lg"
            >
              <Link href="/sign-in?role=recruiter"> Recruiter Login</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-white border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
            >
              <Link href="/sign-in?role=candidate">Candidate Login</Link>
            </Button>
          </div>
        </div>
      </div>
      <Features />
      <InfoZigZag />
      <Testimonials />
      <Footer />
    </>
  );
}
