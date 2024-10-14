import React, { useState } from "react";
import bookingImage from "../../assets/ticket-alt-svgrepo-com.svg";
import destinationImage from "../../assets/destination-drawn-hand-svgrepo-com.svg";
import flightImage from "../../assets/flight-svgrepo-com.svg";
import logoImage from "../../assets/logo1.png";

// Modal Component
const Modal = ({ isOpen, onClose }) => {
  console.log("Modal isOpen:", isOpen); // Debug log
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center  ">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 z-10 animate-modal-open ">
        <div className="flex justify-between items-center ">
          <h2 className="text-2xl font-bold">Business Information</h2>
          <button onClick={onClose} className="text-red-500 text-xl">
            &times;
          </button>
        </div>
        <div className="mt-5 text-center text-gray-700 ">
          <div className="flex justify-center mb-4">
            <img className="w-24 h-auto" src={logoImage} alt="Logo" />
          </div>
          <p className="text-2xl font-extrabold text-sky-600 mb-2">
            <span className="text-sky-700">Saifur</span> Enterprise
          </p>
          <p className="text-lg font-bold italic text-gray-600 mb-3">
            Proprietor: Saifur Rahman Sabul
          </p>

          <div className="flex flex-col space-y-3 text-center max-w-sm mx-auto ">
            <div className="flex items-start justify-center space-x-2 bg-gray-100 rounded-lg p-2 shadow-md ">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13401 2 5 5.13401 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z" />
              </svg>
              <p className="text-gray-800">
                303, 4th Floor, Surma Tower, Taltola, Sylhet, Bangladesh
              </p>
            </div>

            <div className="flex items-start justify-center space-x-3 bg-gray-100 rounded-lg p-2 shadow-md">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4 4m0 0l-4-4m4 4V8m-5-2a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293L12 3.414 9.293 6.707A1 1 0 018.586 7H6z" />
              </svg>
              <p className="text-gray-800">
                Email: <a href="mailto:saifursetc@gmail.com" className="text-blue-600 hover:underline">saifursetc@gmail.com</a>
              </p>
            </div>

            <div className="flex items-start justify-center space-x-3 bg-gray-100 rounded-lg p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <p className="text-gray-800">
                Phone: +8801728 105533, +8801818 989713
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-b-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-200"
          >
            Close
          </button>
        </div>
      </div>

      {/* Full-page blurred background */}
      <div className="absolute  inset-0  opacity-50" onClick={onClose}></div>
    </div>
  );
};

// TravelInfo Component
const TravelInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Modal opened");
    document.body.classList.add("modal-open"); // Prevent scrolling
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Modal closed");
    document.body.classList.remove("modal-open"); // Allow scrolling
    setIsModalOpen(false);
  };

  return (
    <div className="my-16 px-5 lg:px-24 fade-in " id="info">
      <h2 className="text-center text-4xl font-bold">Your Travel Information</h2>
      <p className="text-center text-lg mt-4 mb-12 text-gray-500">
        Get ready for your next adventure by selecting a destination, booking a trip, and taking your flight.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div
          className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex items-center hover:shadow-xl transition duration-300"
          onClick={openModal}
        >
          <img className="w-16 h-16 mr-4" src={bookingImage} alt="Booking Information" />
          <div>
            <h3 className="text-xl font-semibold">Booking Information</h3>
            <p className="text-gray-500 mt-2">Check booking details for your travel itinerary.</p>
          </div>
        </div>
        
        <div
          className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex items-center hover:shadow-xl transition duration-300 "
          onClick={openModal}
        >
          <img className="w-16 h-16 mr-4" src={destinationImage} alt="Destination Information" />
          <div>
            <h3 className="text-xl font-semibold">Destination Information</h3>
            <p className="text-gray-500 mt-2">Discover your travel destination and activities.</p>
          </div>
        </div>
        
        <div
          className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex items-center hover:shadow-xl transition duration-300"
          onClick={openModal}
        >
          <img className="w-16 h-16 mr-4" src={flightImage} alt="Flight Information" />
          <div>
            <h3 className="text-xl font-semibold">Flight Information</h3>
            <p className="text-gray-500 mt-2">Check flight schedules and details for your travel itinerary.</p>
          </div>
        </div>
      </div>

      {/* Modal Usage */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TravelInfo;
