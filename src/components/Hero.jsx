import React from 'react';

const Hero = () => {
  const title = "Professional Painter";
  const colors = [
    "text-red-500", "text-blue-500", "text-green-500", "text-yellow-500",
    "text-purple-500", "text-pink-500", "text-orange-500", "text-teal-500",
    "text-indigo-500", "text-rose-500", "text-lime-500", "text-emerald-500",
    "text-cyan-500", "text-violet-500", "text-fuchsia-500", "text-sky-500",
  ];

  return (
    <div
      className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero101.JPG')" }}
    >
      <h2 className="text-5xl md:text-8xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#48b2d7] via-green-500 to-orange-600">
  Professional <br /> Painter
</h2>
    </div>
  );
};

export default Hero;
