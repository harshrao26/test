import React from 'react'
import {
  Archive,
  BarChart2,
  Banknote,
  UserCheck,
  FileText,
} from 'lucide-react'

const stats = [
  { value: '250M+', label: 'Invoices Uploaded', Icon: Archive },
  { value: '6M+', label: 'Businesses Visible', Icon: BarChart2 },
  { value: '$300B+', label: 'Trade Value Filled', Icon: Banknote },
  { value: '35,000+', label: 'Retail Investors', Icon: UserCheck },
  { value: '6M+', label: 'Tax Returns Filed', Icon: FileText },
]

export default function NumbersSection() {
  return (
    <section className="max-w-7xl mx-auto px-6  ">
      <div className="grid md:grid-cols-1 gap-16 items-center">
          
        {/* Stats Side */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {stats.map(({ value, label, Icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between p-6   rounded-xl    -gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#16C47F] to-[#66e4b2] text-white p-3 rounded-full shadow-lg">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
