import React from 'react';

const PersonalStatement: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Personal Statement
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-left">Professional Overview</h3>
          <p className='text-sm'>
            A dynamic full-stack engineer with a strong skillset and systems development focus, well suited to ambitious brands. With a background spanning over a decade across startups, scale-ups, and agency roles in Health Care, Luxury Fashion, and Sport verticals, I specialize in gathering project requirements, articulating development plans that allow buffer for uncertainties, and delivering projects on time and on budget. This is achieved while fostering partnerships with stakeholders to accelerate business growth and improve customer experience.
          </p>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-left">Core Competencies</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Excellent communicator with the ability to convey ideas clearly and succinctly</li>
            <li>Agile, innovative, and strategic thinker</li>
            <li>Proficient in IT, including Windows, Mac OS, Microsoft Office, Adobe Creative Cloud, and CRM platforms</li>
            <li>Resilient and goal-oriented, continuously motivated to achieve personal and team objectives</li>
            <li>Adept at establishing and maintaining meaningful relationships with stakeholders at all levels</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalStatement;