import React from "react";

const Hero3 = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-green-700 to-blue-800">
        <h3 className="text-center text-4xl uppercase font-bold py-3 tracking-widest text-white">Pricing</h3>
        <div className="p-6 space-y-10 max-w-5xl mx-auto text-gray-800 font-semibold ">
      {/* Budget Painting Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
      <div className="bg-red-300 rounded-2xl p-6 pr-10 shadow-md md:h-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-red-700">Budget Painting</h2>
        <ul className="space-y-2 text-lg">
          <li>2 rooms: $600</li>
          <li>3 rooms: $800</li>
          <li>4 rooms: $1050</li>
          <li>5 rooms: $1250</li>
        </ul>
      </div>

      {/* Normal Painting Section */}
      <div className="bg-yellow-300 rounded-2xl p-6 pr-10 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Normal Painting</h2>
        <ul className="space-y-2 text-lg">
          <li>2 rooms: $700</li>
          <li>3 rooms: $900</li>
          <li>4 rooms: $1200</li>
          <li>5 rooms: $1400</li>
        </ul>
      </div>

      {/* Premium Painting Section */}
      <div className="bg-blue-300 rounded-2xl p-6 pr-10 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Premium Painting</h2>
        <ul className="space-y-2 text-lg">
          <li>2 rooms: $800</li>
          <li>3 rooms: $1050</li>
          <li>4 rooms: $1350</li>
          <li>5 rooms: $1550</li>
        </ul>
      </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Additional Services</h2>
        <ul className="space-y-2 text-lg">
          <li>Door frame: $20</li>
          <li>Door set: $50</li>
          <li>Toilet pipe: $50</li>
          <li>Main gate: $80</li>
          <li>Putty plaster: $150 - $300</li>
          <li>Oil sealer: $150 - $350</li>
        </ul>
      </div>

      {/* Features */}
      <div className="bg-green-100 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Why Choose Us?</h2>
        <ul className="space-y-2 text-lg list-disc list-inside">
          <li>✅ Can choose color</li>
          <li>✅ Patch up nail hole cracks line free</li>
          <li>✅ 100% protection for floor and furniture</li>
          <li>✅ Free shifting of furniture</li>
          <li>✅ Normal clean after complete job</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Hero3;
