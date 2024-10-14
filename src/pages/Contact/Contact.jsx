// ContactForm.jsx
import emailjs from "emailjs-com";
import React, { useState } from "react";
import logoImage from "../..//assets/logo1.png"; // Add the path to your logo image


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_USER_ID"
        // EmailJS Setup: Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with the credentials from your EmailJS account. // You can configure the template for receiving emails in your EmailJS dashboard.
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );

    setFormData({
      name: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  my-10 fade-in" id="contact">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700 font-medium">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Mobile Number"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg text-gray-700 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message"
              rows="6"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-bold text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Contact Us
            </button>
          </div>
        </form>
        {/* Contact info Start */}
        <div className="mt-8 p-8  text-center text-gray-700 transition-transform transform hover:scale-105 duration-300">
        <div className="flex justify-center mb-6">
            <img className="w-24 h-auto" src={logoImage} alt="Logo" />
          </div>
          <p className="text-2xl font-extrabold text-sky-600 mb-2 tracking-wide">
            <span className="text-sky-700">Saifur</span> Enterprise
          </p>
          <p className="text-sm font-bold italic text-gray-600 mb-3 sm:text-lg">
            Proprietor: Saifur Rahman Sabul
          </p>

          <div className="flex flex-col space-y-3 text-center max-w-sm mx-auto">
            {/* Address */}
            <div className="flex items-start justify-center space-x-2 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13401 2 5 5.13401 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"
                ></path>
              </svg>
              <p className="text-gray-800 ">
                303, 4th Floor, Surma Tower, Taltola,
                <br />
                Sylhet, Bangladesh
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start justify-center space-x-3 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l-4 4m0 0l-4-4m4 4V8m-5-2a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293L12 3.414 9.293 6.707A1 1 0 018.586 7H6z"
                ></path>
              </svg>
              <p className="text-gray-800">
                Email:{" "}
                <a
                  href="mailto:saifursetc@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  saifursetc@gmail.com
                </a>
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start justify-center space-x-3 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <p className="text-gray-800">
                Phone: +8801728 105533, +8801818 989713
              </p>
            </div>
          </div>
        </div>
        {/* Contact info end */}
      </div>
    </div>
  );
};

export default Contact;
