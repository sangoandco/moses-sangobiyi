import React from 'react';
import Player from './Player';

interface HeroProps {
  firstName: string;
  secondName: string;
  emailAddress: string;
  phoneNumber: string;
  github: string;
}

const Hero: React.FC<HeroProps> = ({ firstName, secondName, emailAddress, phoneNumber, github }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-6">
        {firstName} {secondName}
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-8">
        <span>
          <a href={`mailto:${emailAddress}`} className="hover:underline text-teal-400">
            {emailAddress}
          </a>
        </span>
        {" | "}
        <span>
          <a href={`tel:${phoneNumber}`} className="hover:underline text-teal-400">
            {phoneNumber}
          </a>
        </span>
        {" | "}
        <span>
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-400">
            GitHub
          </a>
        </span>
      </p>
      <div className="w-full max-w-lg">
        <Player />
      </div>
    </div>
  );
};

export default Hero;
