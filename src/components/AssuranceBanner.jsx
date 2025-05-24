import { CheckCircle } from "lucide-react";
import lock from '../assets/lock.png'

const AssuranceBanner = () => {
  return (
    <div className="bg-gradient-to-r my-10 max-w-7xl relative mx-auto from-[#FFD65A] to-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
      {/* Icon or Logo Placeholder */}
      {/* <div className="flex-shrink-0 absolute p-6 -left-[0%]">
        <img src={lock} alt="" className="h-32" />
      </div> */}

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-xl md:text-3xl font-medium w-full text-gray-900 mb-8 text-center  ">
          Trusted. Transparent. Timely.
        </h2>
        <div className="flex items-center justify-end gap-4 text-gray-700 text-b">
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-[#16C47F] mt-1" />
            <p className="max-w-xs">Provide expert legal consultation tailored to your business</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-[#16C47F] mt-1" />
            <p className="max-w-xs">Maintain transparency throughout the process</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-[#16C47F] mt-1" />
            <p className="max-w-xs">Commit to timelines and deliver with precision</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssuranceBanner;
