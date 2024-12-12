import React from 'react';
import Image from 'next/image';

interface Logo {
  name: string;
  src: string;
}

interface ScrollingBannerLeftProps {
  logos: Logo[];
}

const ScrollingBannerLeft: React.FC<ScrollingBannerLeftProps> = ({ logos }) => {
  
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-marquee">
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 bg-white flex justify-center items-center"
            style={{ width: 116 }}
          >
            <Image
              src={logo.src}
              alt={`${logo.name} ${index < logos.length ? '' : 'duplicate'}`}
              width={80}
              height={80}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${100 * logos.length + 16 * logos.length}px); }
        }

        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBannerLeft;