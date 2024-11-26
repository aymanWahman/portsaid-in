'use client';

import { useState } from "react";

const Modal = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-500 underline"
      >
        {title}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-sandyGold p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <h2 className="text-lg text-seaBlue font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{content}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
