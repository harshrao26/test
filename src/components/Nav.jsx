import { useEffect, useState } from "react";
import {
  Heart,
  Radiation,
  Brain,
  Globe,
  Headphones,
  Plane,
  Calculator,
  User,
  Users,
  Landmark,
  Building2,
  Banknote,
  Factory,
  Scale,
  ShieldCheck,
  Group,
} from "lucide-react";
import {
  Pill,
  FlaskConical,
  Store,
  PackageCheck,
  BadgeCheck,
  FileText,
  FileSignature,
  FileSearch,
  BookMarked,
  Stamp,
  CheckCheck,
  ScanBarcode,
  ReceiptText,
} from "lucide-react";
import {
  AlertCircle,
  Share,
  CornerDownLeft,
  BookText,
  PenTool,
  Image,
  Search,
} from "lucide-react";
import { Mail, Facebook, Twitter, Instagram, Phone } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

import logo from "../assets/logo.png";
import CalendlyModal from "./CalendlyModal"; // adjust the path

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const menuData = [
    {
      label: "Business Structure",
      items: [
        { icon: <User size={20} />, label: "Proprietorship" },
        { icon: <Users size={20} />, label: "Partnership" },
        {
          icon: <Landmark size={20} />,
          label: "Limited Liability Partnership (LLP)",
        },
        { icon: <Building2 size={20} />, label: "Private Limited Company" },
        { icon: <Banknote size={20} />, label: "Public Limited Company" },
        { icon: <Factory size={20} />, label: "Producer Company" },
        { icon: <Scale size={20} />, label: "Section 8 Company" },
        { icon: <ShieldCheck size={20} />, label: "Trust" },
        { icon: <Group size={20} />, label: "Society" },
      ],
    },
    {
      label: "Licence For Business",
      items: [
        {
          icon: <ShieldCheck size={20} />,
          label: "Fssai Registrations & Licence",
        },
        { icon: <Pill size={20} />, label: "Drug Licence" },
        { icon: <FlaskConical size={20} />, label: "Cosmetic Licence" },
        { icon: <Store size={20} />, label: "Shop & Establishment Licence" },
        {
          icon: <PackageCheck size={20} />,
          label: "Import- Export Code (IEC)",
        },
        {
          icon: <BadgeCheck size={20} />,
          label: "Msme (Udyogaadhar Registration)",
        },
        { icon: <FileText size={20} />, label: "ISO Certification" },
        {
          icon: <Banknote size={20} />,
          label: "Employees' Provident Fund Registration (EPFO)",
        },
        { icon: <ShieldCheck size={20} />, label: "ESI Registration (ESIC)" },
        {
          icon: <FileSignature size={20} />,
          label: "Digital Signature Certificate (DSC)",
        },
        { icon: <Globe size={20} />, label: "FCRA Registration" },
        { icon: <FileSearch size={20} />, label: "80g & 12a Registration" },
        { icon: <Users size={20} />, label: "Contract Labour Licence" },
        { icon: <Store size={20} />, label: "Trade Licence" },
        { icon: <BookMarked size={20} />, label: "Spices Licence" },
        { icon: <Stamp size={20} />, label: "APEDA Licence" },
        { icon: <Landmark size={20} />, label: "RCMC Registrations" },
        { icon: <CheckCheck size={20} />, label: "NSIC Registration" },
        { icon: <ScanBarcode size={20} />, label: "Barcode Registration" },
        { icon: <ReceiptText size={20} />, label: "GST Registration" },
      ],
    },
    {
      label: "Manage Your Business",
      items: [
        { icon: <FileText size={20} />, label: "Accounting & Book Keeping" },
        { icon: <ReceiptText size={20} />, label: "GST Return" },
        { icon: <Banknote size={20} />, label: "EPF Return" },
        { icon: <ShieldCheck size={20} />, label: "ESIC Return" },
        { icon: <FileSignature size={20} />, label: "TDS Return" },
        { icon: <FileSearch size={20} />, label: "Income Tax Return" },
        { icon: <BadgeCheck size={20} />, label: "MSME Return" },
        { icon: <User size={20} />, label: "Dir-3 KYC" },
        { icon: <CheckCheck size={20} />, label: "Active Return" },
        { icon: <Landmark size={20} />, label: "Annual Return (Company)" },
        { icon: <ShieldCheck size={20} />, label: "Fssai Return" },
      ],
    },
    {
      label: "Protect Your Business  ",
      items: [
        { icon: <Stamp size={20} />, label: "Trademark Application" },
        { icon: <AlertCircle size={20} />, label: "Trademark Objection" },
        { icon: <ShieldCheck size={20} />, label: "Trademark Opposition" },
        { icon: <Share size={20} />, label: "Trademark Assignment" },
        { icon: <CornerDownLeft size={20} />, label: "Trademark Withdraw" },
        { icon: <BookText size={20} />, label: "Copyright Application" },
        { icon: <PenTool size={20} />, label: "Design Application" },
        { icon: <Image size={20} />, label: "Logo Application" },
        { icon: <Search size={20} />, label: "Patent Search" },
        {
          icon: <FileText size={20} />,
          label: "Patent Provisional Application",
        },
        {
          icon: <FileSignature size={20} />,
          label: "Patent Complete Application",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        { icon: <Stamp size={20} />, label: "Tools" },
        { icon: <AlertCircle size={20} />, label: "Video Tutorials" },
      ],
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/harshlawfinity",
    });
  };

  return (
    <div className="fixed w-full z-50 bg-[#fff] shadow-lg">
      <div className="bg-[#27548A] text-white text-sm px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>011-41734240, +91 99997 04687</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@vyaapaarsalahkaar.com</span>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-200 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-200 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-200 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="hover:text-gray-200 transition"
            >
              <AiOutlineYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-[#fff] max-w-7xl mx-auto z-20     py-2 flex items-center justify-between">
        <div className="text-2xl font-semibold text-[#129990]">
          <img src={logo} alt="" className="w-12" />
        </div>
        <div className="flex gap-8 text-sm font-medium text-gray-900">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#129990] transition">
                <span>{menu.label}</span>
                {hoveredMenu === index ? (
                  <ChevronUp size={16} className="text-[#129990]" />
                ) : (
                  <ChevronDown size={16} className="text-gray-600" />
                )}
              </div>

              {hoveredMenu === index && (
                <div
                  className="absolute top-10 left-0 bg-white shadow-2xl rounded-xl p-4 z-50 border border-gray-200"
                  style={{
                    width: `${Math.ceil(menu.items.length / 10) * 18}rem`,
                  }}
                >
                  <div
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: `repeat(${Math.ceil(
                        menu.items.length / 10
                      )}, minmax(0, 1fr))`,
                    }}
                  >
                    {chunkArray(menu.items, 11).map((chunk, colIdx) => (
                      <div key={colIdx} className="space-y-3">
                        {chunk.map((item, idx) => (
                          <div key={idx}>
                            <DropdownItem icon={item.icon} label={item.label} />
                            {idx !== chunk.length - 1 && (
                              <div className="w- h-px bg-gray-200 my-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4  ">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-[#FF9D23] hover:bg-orange-400 transition relative text-white px-5 py-2 rounded-full text-sm font-medium shadow"
          >
            Book An Appointment
            <p className="h-[5px] w-[5px] top-1 right-2 bg-green-400 rounded-full animate-ping absolute"></p>
          </button>

          <CalendlyModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </nav>
    </div>
  );
};

const DropdownItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition">
    <div className="text-[#129990]">{icon}</div>
    <span className="text-sm text-gray-800">{label}</span>
  </div>
);

export default Navbar;
