import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => (
  <footer className="bg-gradient-to-br from-[#27548A] to-[#27548aca] text-gray-50">
    <div className="max-w-7xl mx-auto px-6 pt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {/* Logo & Description */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Lawfinity</h2>
        <p className="text-sm mb-6">
          Empowering your team with the right guidance and motivation to build a
          thriving workspace.
        </p>
        <div className="flex space-x-4">
          {[Facebook, AiOutlineYoutube, Linkedin, Instagram].map((Icon, i) => (
            <Icon key={i} size={20} className="hover:text-white transition" />
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          {[
            "About Us",
            "Privacy Policy",
            "Terms & Conditions",
            "Refund Policy",
            "Payments Options",
            "Contact us",
            "Blog",
            "Careers",
          ].map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-white transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Articles */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Latest Articles
        </h3>
        <ul className="space-y-4 text-sm">
          {[
            { title: "Why Legal Clarity Matters", date: "Apr 11, 2024" },
            { title: "Business Law Essentials 2024", date: "Mar 08, 2024" },
            { title: "Startup Legal Checklist", date: "Jan 22, 2024" },
          ].map((art) => (
            <li key={art.title}>
              <p className="font-medium hover:text-white transition cursor-pointer">
                {art.title}
              </p>
              <p className="text-xs text-gray-100">{art.date}</p>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-4 inline-block   text-sm font-medium">
          Read more →
        </a>
      </div>

      {/* Contact & Hours */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin size={18} className="mr-2 text-green-" />
            T-10, 3rd Floor, Pankaj Plaza, PLOT-7, Pocket 7, Sector 12, Dwarka,
            New Delhi, Delhi 110075
          </div>
          <div className="flex items-center">
            <Phone size={18} className="mr-2 text-green-" />
            011-41734240, +91 99997 04687
          </div>
          <div className="flex items-center">
            <Mail size={18} className="mr-2 text-green-" />
            info@vyaapaarsalahkaar.com
          </div>
          <div className="mt-4">
            <p className="font-semibold">Work Hours</p>
            <p className="text-gray-50 text-sm">Mon – Sat: 10:00AM – 06:00PM</p>
            <p className="text-gray-50 text-sm">Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>

    <p className="text-center text-[10rem] font-bold text-gray-200 ">
      Lawfinity
    </p>

    {/* Bottom bar */}
    <div className="border-t border-gray-700 py-6 text-center text-xs">
      © 2025 Lawfinity. All rights reserved.
    </div>
  </footer>
);

export default Footer;
