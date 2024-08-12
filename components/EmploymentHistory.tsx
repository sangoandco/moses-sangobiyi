"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Job {
  company: string;
  startDate: string;
  endDate: string;
  overview: string;
  achievements: string;
  responsibilities: string;
  techStack: string[];
}

const employmentData: Job[] = [
  {
    company: 'Company A',
    startDate: '01/01/2020',
    endDate: '31/12/2024',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. In laoreet, magna ut rutrum egestas, libero est fermentum eros, eget imperdiet nisl turpis sed quam. Nunc ac nisi id odio porttitor vestibulum eget a urna. Nunc nec dolor eros. Phasellus eget lacus nec mauris vehicula hendrerit.',
    achievements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. In laoreet, magna ut rutrum egestas, libero est fermentum eros, eget imperdiet nisl turpis sed quam. Nunc ac nisi id odio porttitor vestibulum eget a urna. Nunc nec dolor eros. Phasellus eget lacus nec mauris vehicula hendrerit.',
    responsibilities: 'Curabitur et turpis vitae neque finibus facilisis non sed erat. Maecenas et porta purus, ut gravida eros. Curabitur auctor est sit amet arcu vehicula, ut posuere augue porttitor. Nullam volutpat, nulla a aliquam dictum, eros turpis hendrerit orci, quis lobortis nisl felis non dolor. Nullam ultricies magna sem, quis tincidunt eros suscipit a. Morbi cursus ligula ut ligula vehicula, gravida maximus tortor venenatis.',
    techStack: [
      '/images/react.png',
      '/images/azure.png',
      '/images/postgres.png',
      '/images/mongodb.png',
      '/images/auth0.png',
      '/images/tailwind.png',
    ]
  },
  {
    company: 'Company B',
    startDate: '01/01/2016',
    endDate: '31/12/2019',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. In laoreet, magna ut rutrum egestas, libero est fermentum eros, eget imperdiet nisl turpis sed quam. Nunc ac nisi id odio porttitor vestibulum eget a urna. Nunc nec dolor eros. Phasellus eget lacus nec mauris vehicula hendrerit.',
    achievements: 'Curabitur et turpis vitae neque finibus facilisis non sed erat. Maecenas et porta purus, ut gravida eros. Curabitur auctor est sit amet arcu vehicula, ut posuere augue porttitor. Nullam volutpat, nulla a aliquam dictum, eros turpis hendrerit orci, quis lobortis nisl felis non dolor. Nullam ultricies magna sem, quis tincidunt eros suscipit a. Morbi cursus ligula ut ligula vehicula, gravida maximus tortor venenatis.',
    responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. In laoreet, magna ut rutrum egestas, libero est fermentum eros, eget imperdiet nisl turpis sed quam. Nunc ac nisi id odio porttitor vestibulum eget a urna. Nunc nec dolor eros. Phasellus eget lacus nec mauris vehicula hendrerit.',
    techStack: [
      '/images/docker.png',
      '/images/react.png',
      '/images/html.png',
      '/images/aws.png',
      '/images/css.png',
      '/images/nextjs.png',
      '/images/terraform.png',
    ]
  }
];

const EmploymentHistory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % employmentData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + employmentData.length) % employmentData.length);
  };

  const job = employmentData[currentIndex];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Employment History
      </h2>
      <div className="flex justify-between items-center mb-8">
        <div className="font-bold">
          <h3 className="text-2xl">{job.company}</h3>
          <p>{job.startDate} - {job.endDate}</p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={handlePrevious} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-full mb-8 space-y-4">
        <h4 className="text-xl font-bold text-left">Overview</h4>
        <p>{job.overview}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 space-y-4">
          <h4 className="text-xl font-bold text-left">Achievements</h4>
          <p>{job.achievements}</p>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h4 className="text-xl font-bold text-left">Responsibilities</h4>
          <p>{job.responsibilities}</p>
        </div>
      </div>
      <div className="w-full mt-8">
        <h4 className="text-xl font-bold text-left mb-4">Tech Stack</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {job.techStack.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-2 bg-white rounded">
              <Image
                src={logo}
                alt={`Technology ${index + 1}`}
                width={90}
                height={90}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmploymentHistory;