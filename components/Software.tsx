import React from 'react';

interface SoftwareProps {
  title: string;

}

const Software: React.FC<SoftwareProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl font-bold">
        {title}
      </h1>
    </div>
  );
};

export default Software;