import React from 'react';
import cloudinary from '../assets/cloudinary.png';
import meta from '../assets/meta.png';
import paytm from '../assets/paytm.png';
import gp from '../assets/gp.png';
import aws from '../assets/aws.png';
const partners = [
  {
    name: 'Google Partner',
    src: gp,
  },
  {
    name: 'Paytm',
    src: paytm,
  },
  {
    name: 'Meta',
    src: meta,
  },
  {
    name: 'AWS',
    src: aws,
  },
  {
    name: 'MongoDB',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCO-FDXVc5-6G5uIkT8BsWYLwE4qlfrme3OQ&s',
  },
  {
    name: 'Cloudinary',
    src: cloudinary,
  },
];

const AssociatedWith = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
        We Are <br /> <span className="font-bold">Associated With</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm  flex items-center justify-center w-40 h-20"
          >
            <img
              src={partner.src}
              alt={partner.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociatedWith;
