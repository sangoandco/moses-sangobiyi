import React from 'react';

interface HeroProps {
  firstName: string;
  secondName: string;
  emailAddress:string;
  phoneNumber:string;
  github:string;

}

const Hero: React.FC<HeroProps> = ({ firstName, secondName, emailAddress, phoneNumber, github }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center">
        {firstName} {secondName}
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
        <span>
          <a href={`mailto:${emailAddress}`} className="hover:underline">
            {emailAddress}
          </a>
        </span>
        {" | "}
        <span>
          <a href={`tel:${phoneNumber}`} className="hover:underline">
            {phoneNumber}
          </a>
        </span>
        {" | "}
        <span>
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </span>
      </p>
    </div>
  );
};

export default Hero;