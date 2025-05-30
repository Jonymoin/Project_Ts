import { motion } from "framer-motion";

export default function WashingMachineCleaning() {
  return (
    <section className="bg-indigo-50 py-12 px-6 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">
        Why We’re the Best in Washing Machine Cleaning
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Images */}
        <motion.img
          src="/images/wash7.jpg"
          alt="Washing machine cleaning 1"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="/images/wash10.jpg"
          alt="Washing machine cleaning 2"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Highlights */}
      <div className="mt-10 max-w-3xl mx-auto text-center text-gray-700">
        <p className="text-lg mb-4">
          At <span className="font-semibold text-indigo-700 uppercase">Homerepair sg</span>, we take pride in delivering expert-level washing machine cleaning services.
        </p>
        <ul className="space-y-3 text-left text-base md:text-lg mt-6">
          <li>✅ <span className="font-semibold text-indigo-700">Professionalism</span>: Trained technicians with attention to detail</li>
          <li>✅ <span className="font-semibold text-indigo-700">Experience</span>: Trusted by hundreds of happy customers</li>
          <li>✅ <span className="font-semibold text-indigo-700">Convenient Fee</span>: Transparent and affordable pricing</li>
        </ul>
      </div>
    </section>
  );
}
