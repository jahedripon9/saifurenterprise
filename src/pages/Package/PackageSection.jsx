// src/components/PackageSection.js
import React, { useState } from "react";
import PackageCard from "./PackageCard";
import Modal from "./Modal";
import indiaImage from "../../assets/india.jpg";
import SriLankaImage from "../../assets/srilanka.jpg";
import maldivesImage from "../../assets/india.jpg";
import VietnamImage from "../../assets/VietnamImage.jpg";
import Kashmir from "../../assets/Kashmir.jpg";
import Dubai from "../../assets/Dubai.jpg";
import Makkah from "../../assets/Makkah.jpg";

const packages = [
  {
    id: "01",
    adId: "AD12345",
    destination: "India",
    price: "BDT 37,000 per person",
    itinerary: ["8 Days 7 Nights Kalimpong- Darjeeling- Pelling- Gangtok"],
    imageUrl: indiaImage,
    inclusions: [
      "1 Night in Kalimpong (Hotel Mountain View or similar)",
      "2 Nights in Darjeeling (Hotel Yuma or similar)",
      "2 Nights in Pelling (Sikkim Tourist Centre or similar)",
      "2 Nights in Gangtok (The Ridge Hotel or similar)",
      "Daily Breakfast",
      "Meet & Assist",
      "All transfers and sightseeing as per itinerary",
    ],
    colors: ["#FF9933", "#FFFFFF", "#138808"],
    countryCode: "IN", // India
  },
  {
    id: "02",
    adId: "AD12346",
    destination: "Sri Lanka",
    price: "BDT 45,000 per person",
    itinerary: ["Colombo,", " Kandy,", " & Bentota"],
    imageUrl: SriLankaImage,
    inclusions: [
      "2 Nights in Colombo (Hotel Cinnamon Red or similar)",
      "2 Nights in Kandy (Hotel Earls Regency or similar)",
      "2 Nights in Bentota (Hotel Taj Bentota or similar)",
      "Daily Breakfast",
      "Meet & Assist",
      "All transfers and sightseeing as per itinerary",
    ],
    colors: ["#FFB20F", "#009B77", "#FF0000"],
    countryCode: "LK", // Sri Lanka
  },
  {
    id: "03",
    adId: "AD12347",
    destination: "Maldives",
    price: "BDT 80,000 per person",
    itinerary: ["Maldives"],
    imageUrl: maldivesImage,
    inclusions: [
      "3 Nights in Maldives (Resort Island Villa or similar)",
      "All meals included",
      "Snorkeling and water activities",
      "Meet & Assist",
      "Transfers by speedboat",
      "All sightseeing as per itinerary",
    ],
    colors: ["#D21034", "#007E3A", "#FFFFFF"],
    countryCode: "MV", // Maldives
  },
  {
    id: "04",
    adId: "AD12345",
    destination: "Vietnam",
    price: "BDT 65,500  per person",
    itinerary: ["Explore Vietnam & Cambodia in 10 Days, 2 Nights Hanoi + 1 Night Halong Bay + 3 Nights Saigon + 3 Nights Siem Reap "],
    imageUrl: VietnamImage,
    inclusions: [
      "Meet and Greet at Airport.",
      "Visa Assistance.",
      "Accommodation in the category chosen or similar (subject to availability).",
      "Meals as mentioned in the program (B: Breakfast, L: Lunch, D: Dinner).",
      "All entrance fees and sightseeing as mentioned in the program.",
      "Transportation by vehicle with A/C",
      "Sightseeing: Hanoi City Tour, TAM COC & Hoa Lu Tour, Halong City Tour, Mekong Delta Tour, Cu Chi Tunnel Tour, Saigon City Tour, Siem Reap City Tour, Full Day, Angkur City Tour.",
      "Cruise on Non-private junk in Ha Long bay",
      "Shuttle bus Hanoi  Halong  Hanoi.",
      "Waters during tour day.",
      "Local English-speaking guide(s) in Vietnam.",
    ],
    colors: ["#FF9933", "#FFFFFF", "#138808"],
    countryCode: "VN", // India
  },
  {
    id: "05",
    adId: "AD12345",
    destination: "India",
    price: "BDT 18,000  per person",
    itinerary: ["Explore Kashmir in 4 Days, Srinagar 2 Nights (1 Night @ House Boat) + Pahalgam 1 Night "],
    imageUrl: Kashmir,
    inclusions: [
      "Assistance upon arrival at Sheikh Ul Alam Int’l Airport.",
      "Traditional welcome in the Hotel with Welcome Drink (Hot Tea / Coffee / Kahwa) on arrival.",
      "Visa Assistance.",
      "02 Nights Hotel Accommodation in Srinagar. (01 Night House Boat)",
      "01 Night Accommodation in a Pahalgam.",
      "Daily Breakfast & Dinnar at Hotel.",
      "All transportations & sightseeing tours by Non-Ac Innova / Xylo / Mahindra XUV.",
      "90 Minutes Boat Ride (SHIKARA) on world famous Dal Lake – Srinagar.",
      
    ],
    colors: ["#FF9933", "#FFFFFF", "#138808"],
    countryCode: "VN", // India
  },
  {
    id: "06",
    adId: "AD12345",
    destination: "Dubai",
    price: "BDT 40,000  per person",
    itinerary: ["Dubai City Breaks in 4 Days, 3 Nights "],
    imageUrl: Dubai,
    inclusions: [
      "3 Nights hotel accommodation.",
      "Daily buffet breakfast at the hotel.",
      "Airport assistance at Dubai airport.",
      "Airport – Hotel – Airport transportation.",
      "English-speaking guide on tours period.",
      "All entrance fees & taxes.",
      "Half-Day Dubai City Tour.",
      "Desert Safari with BBQ Dinner.",
      "Creek Cruise dinner & live entertainment.",
      
    ],
    colors: ["#FF9933", "#FFFFFF", "#138808"],
    countryCode: "AE", // India
  },
  {
    id: "07",
    adId: "AD12345",
    destination: "SaudiArabia",
    price: "BDT 1,15,000  per person",
    itinerary: ["Exclusive Umrah Package - 14 Days, 8N Makkah & 5N Madinah "],
    imageUrl: Makkah,
    inclusions: [
      "Air ticket with all taxes on Saudi Airlines: Dhaka – Jeddah, Madinah – Dhaka (economy class)",
      "08 nights of hotel accommodation in Makkah ",
      "05 nights of hotel accommodation in Madinah",
      "Daily breakfast at the hotel (Superior & Premium Package Only)",
      "Private AC Bus Transportation Service: Jeddah Airport – Makkah Hotel – Madinah Hotel – Madinah Airport",
      "Umrah Visa Fee.",
      "Health Insurance.",
      "Room Service as per hotel rules",
      "Ziyarah / Sightseeing tour in Makkah",
      "Dedicated Bengali Muallem at the time of performing umrah.",
      
      
    ],
    colors: ["#FF9933", "#FFFFFF", "#138808"],
    countryCode: "SA", // India
  },
];

const PackageSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="p-6 container mx-auto">
      <h2 className="sm:text-4xl text-2xl font-bold text-center mb-6">Tour Packages</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} openModal={openModal} />
        ))}
      </div>

      {selectedPackage && (
        <Modal pkg={selectedPackage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default PackageSection;
