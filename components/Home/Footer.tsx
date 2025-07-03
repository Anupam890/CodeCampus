import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 border-t border-gray-800 pt-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">CodeCampus</h2>
          <p className="text-sm text-gray-400">
            Empowering candidates and recruiters through intelligent AI-driven
            hiring tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            For Candidates
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* For Recruiters */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            For Recruiters
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-sm mb-4">hello@codecampus.ai</p>
          <div className="flex space-x-4">
            <a href="#">
              <Facebook className="w-5 h-5 hover:text-white" />
            </a>
            <Link href="https://x.com/AnupamDev81">
              <Twitter className="w-5 h-5 hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/anupam-mandal71/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-white" />
            </Link>
            <a href="#">
              <Mail className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} CodeCampus. All rights reserved.
        <div>Made with ❤️ by Anupam</div>
      </div>
    </footer>
  );
};

export default Footer;
