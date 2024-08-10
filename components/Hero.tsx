import React from 'react';

interface HeroProps {
  firstName: string;
  secondName: string;
  emailAddress:string;
  phoneNumber:string;

}

const Hero: React.FC<HeroProps> = ({ firstName, secondName, emailAddress, phoneNumber }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl font-bold">
        {firstName} {secondName}
      </h1>
      <p className="mt-4 text-lg">
        <span>{emailAddress}</span> | <span>{phoneNumber}</span>
      </p>
    </div>
  );
};

export default Hero;