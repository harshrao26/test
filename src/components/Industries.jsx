import React, { useState } from "react";

const menuData = [
  {
    label: "Business Structure",
    items: [
      {
        label: "Proprietorship",
        desc: "A simple business structure owned by one individual with minimal compliance.",
      },
      {
        label: "Partnership",
        desc: "Business owned by two or more individuals with shared responsibilities.",
      },
      {
        label: "Limited Liability Partnership (LLP)",
        desc: "Combines benefits of a partnership with limited liability protection.",
      },
      {
        label: "Private Limited Company",
        desc: "A popular structure offering limited liability and ease of fundraising.",
      },
      {
        label: "Public Limited Company",
        desc: "Suitable for large businesses planning to raise capital from the public.",
      },
      {
        label: "Producer Company",
        desc: "Formed by farmers/producers for agricultural production and trade.",
      },
      {
        label: "Section 8 Company",
        desc: "Non-profit company with charitable objectives.",
      },
      {
        label: "Trust",
        desc: "Entity created to manage property or assets for charitable purposes.",
      },
      {
        label: "Society",
        desc: "For promotion of art, education, science, literature or charitable purposes.",
      },
    ],
  },
  {
    label: "Licence For Business",
    items: [
      {
        label: "Fssai Registrations & Licence",
        desc: "Mandatory for food-related businesses ensuring food safety standards.",
      },
      {
        label: "Drug Licence",
        desc: "Required for manufacturing or selling pharmaceuticals.",
      },
      {
        label: "Cosmetic Licence",
        desc: "Necessary for producing or distributing cosmetic products.",
      },
      {
        label: "Shop & Establishment Licence",
        desc: "Basic license to run a shop or commercial establishment.",
      },
      {
        label: "Import- Export Code (IEC)",
        desc: "Compulsory for businesses involved in import/export in India.",
      },
      {
        label: "Msme (Udyogaadhar Registration)",
        desc: "Government recognition for small and medium enterprises.",
      },
      {
        label: "ISO Certification",
        desc: "Ensures quality and management standards in business processes.",
      },
      {
        label: "Employees' Provident Fund Registration (EPFO)",
        desc: "Mandatory for businesses with 20+ employees.",
      },
      {
        label: "ESI Registration (ESIC)",
        desc: "Social security scheme for workers' medical and cash benefits.",
      },
      {
        label: "Digital Signature Certificate (DSC)",
        desc: "Required for secure electronic filing and authentication.",
      },
      {
        label: "FCRA Registration",
        desc: "For NGOs receiving foreign contributions legally.",
      },
      {
        label: "80g & 12a Registration",
        desc: "Tax exemptions for NGOs and donors.",
      },
      {
        label: "Contract Labour Licence",
        desc: "Needed if you employ 20+ contract workers.",
      },
      {
        label: "Trade Licence",
        desc: "Authorization from the municipality to operate a business.",
      },
      {
        label: "Spices Licence",
        desc: "Required to export or process spices under the Spices Board.",
      },
      {
        label: "APEDA Licence",
        desc: "Export certification for agricultural and processed food products.",
      },
      {
        label: "RCMC Registrations",
        desc: "Enables exporters to claim benefits from the Foreign Trade Policy.",
      },
      {
        label: "NSIC Registration",
        desc: "Helps small businesses avail government tenders easily.",
      },
      {
        label: "Barcode Registration",
        desc: "Required for retail product tracking and sales.",
      },
      {
        label: "GST Registration",
        desc: "Compulsory for businesses with turnover above ₹40 lakhs.",
      },
    ],
  },
  {
    label: "Manage Your Business",
    items: [
      {
        label: "Accounting & Book Keeping",
        desc: "Maintain financial records for compliance and business insights.",
      },
      { label: "GST Return", desc: "File monthly/quarterly GST returns." },
      { label: "EPF Return", desc: "Ensure timely submission of PF returns." },
      { label: "ESIC Return", desc: "Regular filing for employee insurance compliance." },
      { label: "TDS Return", desc: "Avoid penalties by timely TDS filing." },
      { label: "Income Tax Return", desc: "Annual tax filing for individuals and businesses." },
      { label: "MSME Return", desc: "Mandatory for registered MSMEs." },
      { label: "Dir-3 KYC", desc: "KYC of company directors with MCA." },
      { label: "Active Return", desc: "Company address verification with ROC." },
      { label: "Annual Return (Company)", desc: "Yearly filing with ROC as per Companies Act." },
      { label: "Fssai Return", desc: "Compliance filing for food businesses." },
    ],
  },
  {
    label: "IPR Services",
    items: [
      {
        label: "Trademark Application",
        desc: "Protect your brand identity with legal ownership.",
      },
      {
        label: "Trademark Objection",
        desc: "Respond and resolve objections to your trademark.",
      },
      {
        label: "Trademark Opposition",
        desc: "File opposition against conflicting trademarks.",
      },
      {
        label: "Trademark Assignment",
        desc: "Transfer rights of a trademark to another party.",
      },
      {
        label: "Trademark Withdraw",
        desc: "Cancel a trademark application voluntarily.",
      },
      {
        label: "Copyright Application",
        desc: "Safeguard creative works like books, music, software.",
      },
      {
        label: "Design Application",
        desc: "Protect unique industrial designs and product shapes.",
      },
      {
        label: "Logo Application",
        desc: "Register your business logo for exclusive use.",
      },
      {
        label: "Patent Search",
        desc: "Check patent availability before filing.",
      },
      {
        label: "Patent Provisional Application",
        desc: "Early protection for inventions during development.",
      },
      {
        label: "Patent Complete Application",
        desc: "Full legal protection for a finalized invention.",
      },
    ],
  },
];

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-medium text-center mb-6 text-gray">
        Our Services
      </h2>

      {/* Tabs */}
      <div className="flex  text-center w-full items-center justify-center  overflow-x-auto space-x-4 mb-8">
        {menuData.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === idx
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {menuData[activeTab].items.map((item, i) => (
    <div
      key={i}
      className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div className="text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          {item.label}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.desc}
        </p>
        <div className="mt-2">
        <button className="inline-block mt-2 px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
      </div>

      
    </div>
  ))}
</div>

    </div>
  );
};

export default ServiceTabs;
