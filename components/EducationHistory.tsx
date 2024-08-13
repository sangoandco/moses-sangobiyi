import React from 'react';
import Image from 'next/image';

const educationData = [
  {
    date: '07/2021',
    title: 'AWS Security Workshop',
    institution: 'AWS Professional Services',
    modules: ['AWS Identity & Access Management'],
    image: '/images/aws.png',
  },
  {
    date: '06/2020 – 09/2020',
    title: 'Software Engineering Immersive',
    institution: 'General Assembly',
    modules: [
      'Front-End/ Full-Stack Development',
      'Front-End Frameworks & APIs',
      'Full-Stack Development',
    ],
    image: '/images/generalassembly.png',
  },
  {
    date: '09/2006 – 07/2010',
    title: 'BSc Computer Science [Internet Business]',
    institution: 'Kingston University, Kingston, United Kingdom',
    modules: [
      'Business Skills',
      'Software Development',
      'Economics, Business and Sustainability',
      'Marketing Principles',
      'Organisational Behaviour',
      'Business Decision-Making',
      'SEO & SEM',
    ],
    image: '/images/kingston.png',
  },
  {
    date: '09/2004 – 06/2006',
    title: 'BTEC National Diploma',
    institution: 'Software Development, City & Islington College, London, United Kingdom',
    modules: [],
    image: '/images/candi.png',
  },
];

const EducationHistory: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Education History
      </h2>
      <div className="space-y-8">
        {educationData.map((education, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg p-6">
            <div className="w-full md:w-2/3 pr-4">
              <h3 className="text-xl font-bold">{education.date}</h3>
              <h4 className="text-lg font-semibold mt-2">{education.title}</h4>
              <p className="text-md font-medium">{education.institution}</p>
              {education.modules.length > 0 && (
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {education.modules.map((module, moduleIndex) => (
                    <li key={moduleIndex} className="text-sm">{module}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
              <Image
                src={education.image}
                alt={`${education.title} Logo`}
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationHistory;