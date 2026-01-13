import React from 'react';

const Modal = () => {
  return (
    <div className="bg-white rounded-[20px] p-6 md:p-8 w-full max-w-[340px] md:max-w-[500px] shadow-sm relative mx-auto">
      <button
        className="absolute top-6 right-6 text-gray-900 hover:text-gray-700 transition-colors"
        aria-label="Close modal"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="mt-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hello, there!</h2>

        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur. Eu id ut aliquet aliquam ultrices volutpat eu. Urna pretium dolor faucibus id eget mauris at integer adipiscing. Lorem ipsum dolor sit amet consectetur. Eu id ut aliquet aliquam ultrices volutpat eu. Urna pretium dolor faucibus id eget mauris at integer adipiscing eget mauris at integer adipiscing.
        </p>

        <div className="flex gap-3">
          <button className="px-6 py-2.5 rounded-lg bg-red-100 text-red-500 font-medium hover:bg-red-200 transition-colors cursor-pointer">
            Close
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-[#6B4EFF] text-white font-medium hover:bg-[#5a3ee0] transition-colors cursor-pointer shadow-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
