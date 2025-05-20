import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TaxCalculator() {
  const chartData = {
    labels: ['Take Home', 'Income Tax', 'National Insurance', 'Student Loan'],
    datasets: [
      {
        data: [25392, 4800, 3233, 1575],
        backgroundColor: ['#3B82F6', '#10B981', '#EF4444', '#F59E0B'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10    ">
      {/* Left - Input Section */}
      <div className="bg-zinc-100 p-8    space-y-6">
        <h2 className="text-xl font-  text-blue-700">Enter Your Details</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600">Gross (pre-tax) Income</label>
            <input
              type="text"
              className="w-full mt-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="£35,000"
            />
          </div>

          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-blue-500" />
              Blind
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" defaultChecked className="accent-blue-500" />
              Married
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">Tax Year</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                <option>2016/2017</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Age</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                <option>Under 60</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600">Pension Contribution</label>
            <input
              type="text"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Per Month"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" defaultChecked className="accent-blue-500" />
            Repay 1998-2012 Student Loan
          </label>
        </form>
      </div>

      {/* Right - Results Section */}
      <div className="bg-white p-8 ">
        <h2 className="text-xl font-  text-blue-700 mb-6">Your Results</h2>
        <div className="w-full max-w-sm mx-auto mb-6">
          <Pie data={chartData} />
        </div>

        <div className="space-y-3 text-sm text-gray-700 font-medium">
          <div className="flex justify-between"><span>Income Tax</span><span>£4,800</span></div>
          <div className="flex justify-between"><span>Tax Free Allowance</span><span>£11,000</span></div>
          <div className="flex justify-between"><span>National Insurance</span><span>£3,233</span></div>
          <div className="flex justify-between"><span>Take-home Pay</span><span>£25,392</span></div>
          <div className="flex justify-between"><span>Student Loan</span><span>£1,575</span></div>
          <div className="flex justify-between"><span>Pension</span><span>£0</span></div>
        </div>
      </div>
    </div>
  );
}
