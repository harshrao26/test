import React from 'react';

const services = [
  {
    title: 'Service 1',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    image:
      'https://thumbs.dreamstime.com/b/business-meeting-isolated-cartoon-vector-illustrations-group-diverse-people-meeting-office-discussing-new-business-strategy-257598036.jpg',
  },
  {
    title: 'Service 2',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    image:
      'https://thumbs.dreamstime.com/b/developing-business-plan-isolated-cartoon-vector-illustrations-group-startup-specialists-discussing-new-project-office-260986476.jpg',
  },
  {
    title: 'Service 3',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    image:
      'https://img.freepik.com/premium-vector/cloud-infrastructure-engineer-isolated-cartoon-vector-illustrations-professional-specialist-deals_107173-64996.jpg',
  },
  {
    title: 'Service 4',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    image:
      'https://media.istockphoto.com/id/1569043018/vector/new-business-contact-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=tnSy8vbRKYWOLEAl11MaequlVKg21fpHkxZoPBUcwmM=',
  },
];

const ServicesLtoR = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 space-y-16">
        <h2 className='relative text-center border-b-3 border-[#16C47F] w-fit mx-auto pb-2'>
        <span className="text-3xl font-semibold text-gray-800 text-center w-full">Our Services</span>
        <p className='h-10 w-10 absolute top-0 left-0 z'></p>
        </h2>
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row mt-10 ${
            idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center gap-10`}
        >
          {/* Text Block */}
          <div className="w-full md:w-1/2 bg-zinc-100 p-8 md:p-12 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
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
  );
};

export default ServicesLtoR;
