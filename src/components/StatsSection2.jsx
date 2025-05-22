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
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <div>
          <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
            Trust built<br />
            on performance<span className="text-[#F93827]">.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            From day one, our platform has scaled with businesses globally. Reliable infrastructure for massive volume and mission-critical processes.
          </p>
        </div>

        {/* Stats Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map(({ value, label, Icon }, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#16C47F] to-[#66e4b2] text-white p-3 rounded-full shadow-lg">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
