import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
const Hero1 = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const messages = [
    "Visa Approved! New adventures await! 🌍✈️ ",
    "Big news: Visa Success! Ready for this next chapter! 🗺️✨",
    "The journey begins! Visa approved, dreams unlocked! 🌏💼",
    "Visa secured! Can’t wait to explore new horizons! 🚀🌍",
    "Visa success! One step closer to my dreams! 🛫💙",
    "Approved and excited! Ready to make new memories abroad! 🌍❤️",
    "Visa in hand, dreams in sight! Here’s to new beginnings! ✈️🌟",
    "Milestone unlocked: Visa success! Cheers to future adventures! 🥂🌎",
    "Visa approved! Ready to take on the world! 🌏💫",
    "Grateful and thrilled for this visa success! Let the journey begin! 🌍🛫",
    "Visa approved! One step closer to my dreams! 🌍✈️",
    "Here we go! Visa in hand, heart full of excitement! 🗺️✨",
    "Visa success! Ready to embrace new cultures and challenges! 🌎💪",
    "Next stop: London! Visa granted, dreams unfolding! 🌍💼",
    "Big win today – visa approved! Adventure is calling! 🌏🚀",
    "The world just got a little smaller! Visa approved! ✈️💫",
    "Visa secured, journey begins! Here’s to the next chapter! 🌍❤️",
    "Couldn’t be happier! Visa success means new horizons await! 🌏✨",
    "Officially stamped for new experiences! Visa approved! 🛫💼",
    "Cheers to new adventures and endless possibilities! Visa approved! 🌍🥂",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  // Auto change messages effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const currentIndex = messages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 2500); // Change message every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [messages]);

  return (
    <div className="p-6 py-2  dark:text-gray-100">
      <h2 className="text-center text-4xl font-bold">Visa Success Achieved</h2>
      <p className="text-center text-xs sm:text-2xl mt-4 mb-12 text-red-700 font-semibold ">
        {currentMessage}
      </p>
      <div className="glide-04 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://i.ibb.co.com/rxrFq3X/img1.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/rxrFq3X/img1.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/rxrFq3X/img1.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/rxrFq3X/img1.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/rxrFq3X/img1.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
