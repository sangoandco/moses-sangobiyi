"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideProps {
  title: string;
  image: string;
  url: string;
}

const slides: SlideProps[] = [
  {
    title: 'Crabrtee & Evelyn',
    image: '/images/crabtreeevelyn.png',
    url: 'https://www.crabtree-evelyn.co.uk/',
  },
  {
    title: 'Disappearing Dining Club',
    image: '/images/disappearing.png',
    url: 'https://www.disappearingdiningclub.co.uk/',
  },
  {
    title: 'Miserden',
    image: '/images/miserden.png',
    url: 'https://www.miserden.org/',
  },
  {
    title: 'Ralph & Russo',
    image: '/images/ralphrusso.png',
    url: 'https://www.ralphandrusso.com/',
  },
  {
    title: 'Sirkka Networks',
    image: '/images/sirkkanetworks.png',
    url: 'https://www.sirkkanetworks.com/',
  },
  {
    title: 'Veevers Carter',
    image: '/images/veeverscarter.png',
    url: 'https://www.veeverscarter.com/',
  },
  {
    title: 'E-Flex',
    image: '/images/eflex.png',
    url: 'https://www.e-flex.co.uk/',
  },
  {
    title: 'Lucy & Yak',
    image: '/images/lucyyak.png',
    url: 'https://lucyandyak.com/',
  },
  {
    title: 'Demeure',
    image: '/images/demeure.png',
    url: 'https://www.demeure.co.uk/',
  },
];

const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Portfolio
      </h2>
      <div className="relative h-screen flex justify-center items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
              {/* <div className="w-full md:w-3/10 h-full flex flex-col items-center md:items-start justify-center p-4 text-center md:text-left bg-white">
                <h3 className="text-2xl mb-4">{slide.title}</h3>
              </div> */}
              <div className="w-full md:w-7/10 h-full flex items-center justify-center">
                <a href={slide.url} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                  <div className="w-full h-full relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      layout="fill"
                      objectFit="contain"
                      className="max-w-full max-h-full object-center"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;