import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div>
    <div className="border-b border-white">
    
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center bg-cyan-500 text-white font-semibold text-left p-4"
    >
      <span>{title}</span>
      <span>{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && <div className="p-4 bg-white">{children}</div>}
  </div>
  </div>
);

const basePackages = [
  {
    title: "Budget Package",
    img: "/images/matex.png",
    description: (
      <>
        <strong>NIPPON MATEX WHITE.</strong> Our most Budget-Friendly package.
        Fine-tuned for home owners to just want a fresh coat of white without breaking the bank.
      </>
    ),
  },
  {
    title: "Value Package",
    img: "/images/vinilex.png",
    description: (
      <>
        <strong>NIPPON VINILEX 5000.</strong> Next in line for our economical
        paint. Famous for their low-odour and anti-fungal properties.
      </>
    ),
  },
  {
    title: "Premium Package",
    img: "/images/odourless.png",
    description: (
      <>
        <strong>ODOURLESS ALL IN ONE.</strong> Close to 0% smell, increased
        durability, washable all in a single pint of paint—what else do you
        want?
      </>
    ),
  },
  {
    title: "Luxury Package",
    img: "/images/easywash.png",
    description: (
      <>
        <strong>ODOURLESS EASY WASH.</strong> Intended for home-owners who want
        to have the best the market has to offer. It has all the features of
        Odourless all in one.
      </>
    ),
  },
];

const sectionPackages = {
  "HDB-2 Room / Private Apt - 1 Bedder (Up to 600sqft)": ["$600", "$750", "$950", "$1150"],
  "HDB-3 Room / Private Apt - 2 Bedder (600-900sqft)": ["$700", "$850", "$1050", "$1350"],
  "HDB-4 Room / Private Apt - 3 Bedder (900-1100sqft)": ["$800", "$950", "$1200", "$1500"],
  "HDB-5 Room / Private Apt - 4 Bedder (1100-1300sqft)": ["$900", "$1100", "$1300", "$1600"],
  "HDB-Executive Room / Private Apt - 5 Bedder (1300-1700sqft)": ["$1000", "$1200", "$1400", "$1700"],
  "HDB-Maisonette Room / Private Apt - 5 Bedder (1700-2000sqft)": ["$1000", "$1200", "$1400", "$1700"],
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const entries = Object.entries(sectionPackages);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className='text-center text-4xl md:text-8xl py-4 font-semibold uppercase'>Our Package</h2>
      <div className="flex flex-col gap-6">
        {entries.map(([sectionTitle, prices], index) => (
          <AccordionItem
            key={sectionTitle}
            title={sectionTitle}
            isOpen={openIndex === index}
            onClick={() => toggleIndex(index)}
          >
            <div className="grid gap-10">
              {basePackages.map((pkg, i) => (
                <div key={i} className="flex items-start gap-6">
                  <img src={pkg.img} alt={pkg.title} className="w-20 h-20 object-contain" />
                  <div>
                    <div className="text-lg font-bold italic">{pkg.title}</div>
                    <div className="text-gray-800">{pkg.description}</div>
                  </div>
                  <div className="ml-auto text-xl font-semibold">{prices[i]}</div>
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}

        {/* Add Ons Section */}
        <AccordionItem
          title="Add Ons"
          isOpen={openIndex === entries.length}
          onClick={() => toggleIndex(entries.length)}
        >
          <div className="grid md:grid-cols-2 gap-4 text-sm text-black">
            {/* Left Column */}
            <div>
              <div className="grid grid-cols-2 border border-[#cc8a52]">
                <div className="font-bold p-2 border-b border-[#cc8a52]">ADD-ONS</div>
                <div className="font-bold p-2 border-b border-[#cc8a52]">PRICES</div>

                <div className="p-2 border-t border-[#cc8a52]">DOOR</div>
                <div className="p-2 border-t border-[#cc8a52]">$50</div>

                <div className="p-2 border-t border-[#cc8a52]">DOOR FRAME</div>
                <div className="p-2 border-t border-[#cc8a52]">$20</div>

                <div className="p-2 border-t border-[#cc8a52]">MAIN GATE</div>
                <div className="p-2 border-t border-[#cc8a52]">$100</div>

                <div className="p-2 border-t border-[#cc8a52]">SEALER (WHOLE HOUSE)</div>
                <div className="p-2 border-t border-[#cc8a52]">$150 - $600</div>

                <div className="p-2 border-t border-[#cc8a52]">PIPE</div>
                <div className="p-2 border-t border-[#cc8a52]">$50</div>

                <div className="p-2 border-t border-[#cc8a52]">Extra walls (e.g. Kitchen)</div>
                <div className="p-2 border-t border-[#cc8a52]">From $100</div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-2 border border-[#cc8a52]">
                <div className="font-bold p-2 border-b border-[#cc8a52]">ADD-ONS</div>
                <div className="font-bold p-2 border-b border-[#cc8a52]">PRICES</div>

                <div className="p-2 border-t border-[#cc8a52]">BALCONY (EXTERIOR PAINT)</div>
                <div className="p-2 border-t border-[#cc8a52]">From $100</div>

                <div className="p-2 border-t border-[#cc8a52]">ADDITIONAL COLOUR</div>
                <div className="p-2 border-t border-[#cc8a52]">From $50</div>

                <div className="p-2 border-t border-[#cc8a52]">MOULD TREATMENT</div>
                <div className="p-2 border-t border-[#cc8a52]">From $50</div>

                <div className="p-2 border-t border-[#cc8a52]">UPGRADE TO ANTI-MOULD ODOURLESS CEILING PAINT</div>
                <div className="p-2 border-t border-[#cc8a52]">From $50</div>

                <div className="p-2 border-t border-[#cc8a52]">WALLPAPER REMOVAL</div>
                <div className="p-2 border-t border-[#cc8a52]">From $100</div>

                <div className="p-2 border-t border-[#cc8a52]">Touch up fee</div>
                <div className="p-2 border-t border-[#cc8a52]">From $150</div>
              </div>
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Accordion;
