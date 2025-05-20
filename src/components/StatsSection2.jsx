import React from 'react'
import {
  Archive,
  BarChart2,
  Banknote,
  UserCheck,
  FileText,
} from 'lucide-react'

const stats = [
  { value: '250M+',   label: 'invoices uploaded',   Icon: Archive },
  { value: '6M+',     label: 'Businesses visible',  Icon: BarChart2 },
  { value: '$300B+',  label: 'trade value filled',  Icon: Banknote },
  { value: '35,000+', label: 'retail investors',    Icon: UserCheck },
  { value: '6M+',     label: 'tax returns filed',   Icon: FileText },
]

export default function NumbersSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* text */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900">
          Numbers don’t lie!
        </h2>
        <p className="mt-4 text-gray-600">
          Products that perform seamlessly during any surge—no uptime worries. Ingest and process any data, anytime.
        </p>
      </div>

      {/* cards */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map(({ value, label, Icon }, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{value}</h3>
                <p className="mt-1 text-gray-500">{label}</p>
              </div>
              <Icon className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
