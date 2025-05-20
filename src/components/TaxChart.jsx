import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaxChart = () => {
  const data = {
    labels: ['Take Home', 'Income Tax', 'National Insurance', 'Student Loan'],
    datasets: [
      {
        label: '£',
        data: [25392, 4800, 3233, 1575],
        backgroundColor: ['#3B82F6', '#10B981', '#EF4444', '#F59E0B'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Your Results</h3>
      <div className="max-w-xs mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default TaxChart;
