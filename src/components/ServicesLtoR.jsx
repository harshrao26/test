import React from "react";
import { FaCheck } from "react-icons/fa6";

const services = [
  {
    title: "Business Structure",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    checks: ["Details 1", "Details 2", "Details 3", "Details 4", "Details 5"],
    image:
      "https://thumbs.dreamstime.com/b/business-meeting-isolated-cartoon-vector-illustrations-group-diverse-people-meeting-office-discussing-new-business-strategy-257598036.jpg",
  },
  {
    title: "Licence For Business",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    checks: ["Details 1", "Details 2", "Details 3", "Details 4", "Details 5"],
    image:
      "https://thumbs.dreamstime.com/b/developing-business-plan-isolated-cartoon-vector-illustrations-group-startup-specialists-discussing-new-project-office-260986476.jpg",
  },
  {
    title: "Manage Your Business",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    checks: ["Details 1", "Details 2", "Details 3", "Details 4", "Details 5"],
    image:
      "https://img.freepik.com/premium-vector/cloud-infrastructure-engineer-isolated-cartoon-vector-illustrations-professional-specialist-deals_107173-64996.jpg",
  },
  {
    title: "Protect Your Business",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    checks: ["Details 1", "Details 2", "Details 3", "Details 4", "Details 5"],
    image:
      "https://media.istockphoto.com/id/1569043018/vector/new-business-contact-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=tnSy8vbRKYWOLEAl11MaequlVKg21fpHkxZoPBUcwmM=",
  },
];

const ServicesLtoR = () => {
  return (
   <div className="bg-[#F3F3E0]">
     <div className="mx-auto  max-w-7xl px-4 py-16 space-y-16">
      <h2 className="relative text-center   w-fit mx-auto pb-2">
      {/* <h2 className="relative text-center border-b-3 border-[#DDA853] w-fit mx-auto pb-2"> */}
        <span className="text-3xl font-semibold capitalize text-[#183B4E] text-center w-full">
          Products for everyone
        </span>
        <p className="h-10 w-10 absolute top-0 left-0 z"></p>
      </h2>
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row mt-10 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10`}
        >
          {/* Text Block */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2 text-[#183B4E]">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
            <p className="mt-2 text-gray-600 text-sm space-y-2 mt-4">
              {service.checks.map((check, idx) => {
                return  <p key={idx} className="flex gap-2 items-center">
                  <FaCheck className="text-[#16C47F]" size={16}/>
                  {check}</p>;
              })}
            </p>
            <button className="mt-4  bg-[#27548A] text-white shadow-xl px-4 py-1 rounded-full text-sm">
                Know More
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-contain rounded-lg  "
            />
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default ServicesLtoR;
