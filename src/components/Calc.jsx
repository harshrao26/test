// App.jsx
import { useState } from 'react';
import { Calculator, Home, PiggyBank } from 'lucide-react';
import TaxCalculator from './components/TaxCalculator.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('Tax Calculator');

  const tabs = [
    { name: 'Tax Calculator', icon: <Calculator size={18} /> },
    { name: 'Mortgage', icon: <Home size={18} /> },
    { name: 'Savings/Budget', icon: <PiggyBank size={18} /> },
  ];

  return (
    <div className=" max-w-7xl mx-auto bg- -100 p-4">
       <h2 className="text-3xl font-medium  text-blue-00 mb-10 text-center">
        Financial Tools
      </h2>
      {/* Header */}
      <div className="flex justify-between items-center   pb-">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center gap-2 px-3 py-4 text-sm  ${
                activeTab === tab.name ? ' text-blue-600 font- bg-gray-100' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>
        
      </div>

      {/* Active Tool */}
      <div className="mt-0">
        {activeTab === 'Tax Calculator' && <TaxCalculator />}
        {/* Other tools can be added here */}
      </div>
    </div>
  );
}
