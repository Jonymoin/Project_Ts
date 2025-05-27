import React from "react";
import { motion } from "framer-motion"; // Motion ঠিক আছে

const Wm1 = () => {
  return (
    <div className="h-[90vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/images/wash2.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl md:text-8xl font-bold">Washing Machine Repair</h1>
        <p className="text-lg md:text-2xl mt-4">Fast, Reliable & Affordable</p>
      </div>
    </div>
  );
};

export default Wm1;
