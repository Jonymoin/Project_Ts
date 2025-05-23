import React, { useState } from 'react';

const Hero2 = () => {
  const totalImages = 80;
  const imagesPerPage = 4;
  const [visibleCount, setVisibleCount] = useState(imagesPerPage);
  const [modalImage, setModalImage] = useState(null);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + imagesPerPage, totalImages));
  };

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const images = Array.from({ length: totalImages }, (_, i) => `/images/work${i + 1}.jpg`);

  return (
    <div className="p-4">
     <div className="w-full py-7 text-white mb-4 bg-cover bg-center flex flex-col items-center justify-center bg-gradient-to-r from-orange-600  to-red-700">
     <h3 className='text-center text-[40px] font-bold'>See Our Work Before Hire us</h3>
     <h3 className='text-center text-[32px]'>Choose Your Design From Anywhere in the World We will make it happen for you</h3>
     </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.slice(0, visibleCount).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`work${idx + 1}`}
            className="w-full h-48 object-cover cursor-pointer rounded shadow-sm hover:scale-105 transition"
            onClick={() => openModal(src)}
          />
        ))}
      </div>

      {visibleCount < totalImages && (
        <div className="text-center mt-6">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            See More
          </button>
        </div>
      )}

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Enlarged"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on the image itself
          />
        </div>
      )}
    </div>
  );
};

export default Hero2;
