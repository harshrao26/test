// CalendlyModal.jsx
import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function CalendlyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        <InlineWidget url="https://calendly.com/harshlawfinity" styles={{ height: '600px' }} />
      </div>
    </div>
  );
}
