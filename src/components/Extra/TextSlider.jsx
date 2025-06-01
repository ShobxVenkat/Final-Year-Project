import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";

const texts = [
  "Welcome to our shop!",
  "Big Sale on Electronics!",
  "Free Shipping on orders over ₹1000!",
  "New arrivals every week!",
  "Limited time offers, hurry up!",
];

export default function TextSlider() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const onLoad = () => setStart(true);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="bg-gradient-to-r from-sky-400 via-blue-700 to-blue-900 overflow-hidden py-3">
      {start && (
        <motion.div
          className="whitespace-nowrap flex gap-8"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {[...texts, ...texts].map((text, idx) => (
            <span
              key={idx}
              className="text-cyan-300 font-semibold text-lg flex items-center"
            >
              <BsLightningFill className="mr-2 animate-pulse" />
              {text}
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
