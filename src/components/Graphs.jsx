import React, { useState } from 'react';
import tree from '../assets/tree.png';
import StatsSection2 from './StatsSection2.jsx';
import AssuranceBanner from './AssuranceBanner.jsx';

const hoverData = [
  { top: '200px', left: '30%', label: 'Service 1', desc: 'This is Service 1 description' },
  { top: '40px', left: '30%', label: 'Service 2', desc: 'This is Service 2 description' },
  { top: '-40px', left: '50%', label: 'Service 3', desc: 'This is Service 3 description' },
  { top: '40px', left: '70%', label: 'Service 4', desc: 'This is Service 4 description' },
  { top: '200px', left: '70%', label: 'Service 5', desc: 'This is Service 5 description' },
];

const Graphs = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const toggleTooltip = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  return (
    <div className="max-w-7xl pb-10 mx-auto items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <p className="text-4xl font-semibold text-center text-[#183B4E] py-16 b">
        Why Choose Us?
      </p>

      <div className="relative flex flex-col items-center justify-center">
        {/* Circle service boxes above tree */}
        <div className="relative w-full h-0 mb-16">
          {hoverData.map((item, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 group"
              style={{ top: item.top, left: item.left }}
              onClick={() => toggleTooltip(index)}
              aria-label={item.desc}
              title={item.desc}
            >
              {/* Circle with service label */}
              <div className="w-20 h-20 bg-[#16C47F] text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-md cursor-pointer group-hover:scale-105 transition-transform duration-300">
                {item.label}
              </div>

              {/* Hover + Click Tooltip */}
              <div
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-gray-700 border border-gray-300 rounded-lg px-3 py-1 text-xs shadow-md whitespace-nowrap z-30 transition-opacity duration-300 ${
                  activeTooltip === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Tree image */}
        <img src={tree} alt="Tree Graphic" className="w-80 sm:w-96 relative z-10" />

        <StatsSection2 />
      </div>
            <AssuranceBanner />
      
    </div>
  );
};

export default Graphs;
