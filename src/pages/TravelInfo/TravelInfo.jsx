import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faPlaneDeparture,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const serviceList = [
  {
    color: "yellow",
    icon: faPlane,
    link: "#contact",
    title: "Your Travel Information",
  },
  {
    color: "yellow",
    icon: faTicket,
    link: "#contact",
    title: "Booking Information",
  },
  {
    color: "yellow",
    icon: faPlaneDeparture,
    link: "#contact",
    title: "Destination Information",
  },
];

const ServiceItem = ({ service }) => (
  <div className=" dark:bg-slate-800 shadow h-full rounded-xl flex items-center p-6 xl:px-6 bg-gray-100 opacity-85">
    <div
      className={`text-2xl w-12 h-12 rounded-2xl flex justify-center items-center mr-3 bg-${service.color}-600 bg-opacity-10 text-${service.color}-600`}
    >
      <FontAwesomeIcon icon={service.icon} />
    </div>
    <a href={service.link} className="text-lg font-bold">
      {service.title}
    </a>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

const TravelInfo = () => {
  return (
    <section className="ezy__service21 light relative mt-0 sm:-mt-64 py-0 md:py-24  bg-transparent dark:bg-[#0b1727] text-zinc-900 dark:text-white container mx-auto ">
      <div className="container px-4 ">
        <div className="grid grid-cols-6 "></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 ">
          {serviceList.map((service, i) => (
            <div className="col-span-1 " key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
