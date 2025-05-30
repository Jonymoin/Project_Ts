import { motion } from "framer-motion";
import { Wrench, Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";

const HeroLinks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-12">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-100 hover:bg-blue-200 rounded-2xl p-6 w-64 shadow-lg cursor-pointer transition"
      >
        <Link to="/service/washing-machine" className="flex items-center gap-4 text-xl font-semibold text-blue-700">
          <Wrench size={32} />
          Washing Machine Repair
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-100 hover:bg-yellow-200 rounded-2xl p-6 w-64 shadow-lg cursor-pointer transition"
      >
        <Link to="/service/painting" className="flex items-center gap-4 text-xl font-semibold text-yellow-800">
          <Paintbrush size={32} />
          Painting Service
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroLinks;
