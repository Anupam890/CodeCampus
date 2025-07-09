"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center h-20 px-6 bg-transparent shadow-sm backdrop-blur-md ">
      <div>
        <h4 className="text-2xl font-bold text-white">CodeCampus</h4>
      </div>
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li>
          <Link href="/">Features</Link>
        </li>
        <li>
          <Link href="#">How it Works</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <Link href="/sign-in">
          <Button className="cursor-pointer bg-gray-800">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-white hover:bg-gray-200 text-black cursor-pointer ">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
