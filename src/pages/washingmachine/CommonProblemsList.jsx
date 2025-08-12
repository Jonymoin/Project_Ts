import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * CommonProblemsList
 * A compact, modern React component built with Tailwind CSS + Framer Motion.
 * - Default export is a single component ready to drop into any page.
 * - Accepts an optional `items` prop to override the default list.
 * - Designed to match the screenshot: vertical list with left accent and check icons.
 *
 * Usage:
 * <CommonProblemsList />
 * OR
 * <CommonProblemsList items={["Thing 1","Thing 2"]} />
 */

const DEFAULT_ITEMS = [
  "Leaking Water",
  "Drum Not Spinning",
  "Top Load Washer Repair",
  "Front Load Washer Repair",
  "Deep Cleanig",
  "Machine Not Draining",
  "Loud Noises & Vibrations",
  "Error Codes on Display",
  "Door Seal Replacement",
  "Unpleasant Odours",
];

export default function CommonProblemsList({ items = DEFAULT_ITEMS }) {
  return (
    <section className="max-w-xl mx-auto p-4 sm:p-6">
      <h3 className="text-3xl text-center">Common Problems We Fix</h3>

      <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-4 sm:p-6">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3"
          >
            {items.map((label, idx) => (
              <motion.li
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="flex items-center gap-4 bg-gradient-to-r from-white to-slate-50 rounded-xl p-3 shadow-sm border border-slate-100"
                aria-label={label}
              >
                {/* left accent */}
                <span className="flex-none w-1.5 h-10 rounded-full bg-gradient-to-b from-sky-500 to-indigo-600 shadow-inner" aria-hidden />

                {/* icon + text */}
                <div className="flex items-center gap-3 w-full">
                  <div className="flex items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-100 w-9 h-9">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-medium text-slate-800">{label}</p>
                  </div>

                  {/* subtle chevron / affordance */}
                  <div className="text-xs text-slate-400">•</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
