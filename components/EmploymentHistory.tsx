"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  overview: string;
  achievements: string[];
  responsibilities: string[];
  techStack: string[];
}

const employmentData: Job[] = [
  {
    company: 'Lucy & Yak',
    role: 'Senior Full Stack Engineer',
    startDate: '05/2023',
    endDate: '09/2024',
    overview: `A global Shopify Plus Fashion House based in the UK; generating £3,500,000+ in monthly revenue and handling 1,200,000+ monthly sessions. I was recruited to future proof their codebase and implement systems; significantly enhancing the development team's efficiency and effectiveness. My role has been pivotal in transitioning the team from functional to operating at an optimal level in a high-growth e-commerce environment.`,
    achievements: [
      `Established documentation and guidelines to standardize practices and enhance code maintainability.`,
      `Loyalty Programme: Successfully integrated award-winning programme, enhancing customer engagement.`,
      `Streamlined issue tracking and project management by implementing a robust ticketing system, improving response times and team coordination.`,
      `Conducted regular mentoring/peer coding sessions, fostering a culture of continuous learning.`,
      `Personalization integration: adoption of split testing enabling data-driven decisions to enhance user experience & increase conversion rates.`,
      `Seamless Shopify Market Access: Executed a seamless transition to expand to 200+ international markets; with switch-over completed within 3 hours avoiding business disruption.`,
      `Checkout Extensibility: migrate scripts and checkout functionality to Shopify Pixels and bespoke apps in line with August 2024 deadline.`,
    ],
    responsibilities: [
      `Instilling Development Structure: agile culture, introducing processes & sprints to streamline operations.`,
      `Leading Development: Spearheaded multiple projects, driving innovation and delivery of high-quality results.`,
      `Tech Insight and Adoption Guidance: Provide insights on emerging technologies and guiding department on adoption that align with business goals.`,
      `Managed relationships with external agencies: ensuring seamless integrations and completion of projects.`,
      `Weekly Reporting to stakeholders: ensuring clear communication of development progress and milestones.`,
    ],
    techStack: [
      '/images/shopify.png',
      '/images/nodejs.png',
      '/images/graphql.png',
      // '/images/mongodb.png',
      // '/images/git.png',
      '/images/optimizely.png',
      '/images/digitalocean.png',
      '/images/hydrogen.png',
    ]
  },
  {
    company: 'Sirkka Networks',
    role: 'Senior Technical Officer',
    startDate: '11/2021',
    endDate: '11/2022',
    overview: `Senior Technical Officer, Sirkka Networks:
Healthcare Startup; missioned with providing affordable healthcare to all via a secure in-house digital platform. Offices in London, Edinburgh & Manchester. I was brought into the team to offer direction and lead Sirkka's transition away from Covid-centered products to Health Services.`,
    achievements: [
      `Encryption of customer data; allowing role-based access control [RBAC]`,
      `Work closely with internal team to ensure Covid-related products meet entry requirements`,
      `Create a "Cloud Agnostic" platform`,
      `Expanding team based on Dept. needs`,
      `Migrate from Docker Swarm infrastructure to Kubernetes Orchestration`,
      `Auth0 integration for user Authentication and Authorization`,
    ],
    responsibilities: [
      `Lead IT Dept. consisting of; Frontend Engineer, Backend Engineer, Data Analyst & Contractors`,
      `Provide insight into current & future technologies that fall in line with the company's vision`,
      `Plan and deliver the rollout of new microservices`,
      `Oversee the schema design and launching of new products/services`,
      `Oversee design, development and rollout of the "Sikka 3.0" web platform`,
      `Migrate from AWS to Microsoft Azure per Health Industry's best practices`,
    ],
    techStack: [
      '/images/typescript.png',
      '/images/javascript.png',
      '/images/mongodb.png',
      '/images/docker.png',
      '/images/kubernetes.png',
      '/images/azure.png',
      '/images/aws.png',
    ]
  },
  {
    company: 'Crabtree & Evelyn',
    role: 'Senior Full Stack Engineer',
    startDate: '01/2021',
    endDate: '10/2021',
    overview: '',
    achievements: [
      `Successfully merged heavily conflicted code`,
      `Led team in development & implementation of Web 2.0 & following deployments`,
      `Successfully collated themes into one codebase providing flexibility based on region of deployment`,
      `Worked closely with teams in multiple time zones`,
      `Bespoke Loyalty programme API integration; making use of all CRUD operations`,
    ],
    responsibilities: [
      `Management of eight regional websites across; Europe, Americas & APAC regions`,
      `Version control management; gatekeeping incoming code from internal developers & partners`,
      `Work closely Design ensure pixel perfect delivery`,
      `Work with E-commerce teams to ensure smooth rollout of new themes`,
      `Collation of patch notes `,
      `Oversee region specific consultancy & development`,
      `Creation & reinforcement of development best practices`,
    ],
    techStack: [
      '/images/react.png',
      '/images/javascript.png',
      '/images/nodejs.png',
      '/images/docker.png',
      '/images/aws.png',
    ]
  },
  {
    company: 'Appnovation',
    role: 'Lead Full Stack Engineer',
    startDate: '10/2020',
    endDate: '12/2020',
    overview: '',
    achievements: [
      `Beta Store developed & presented at client’s International 2020 Summit`,
      `Worked with Italian fulfilment partners to develop custom payment gateway`,
      `Successful project handover to dev team & client`,
      `Migrated 900+ user accounts from existing e-commerce store`,
    ],
    responsibilities: [
      `Brought in as e-commerce expert for the development of client’s headless e-commerce stores`,
      `Consult on best route forward for development of stores across EU markets`,
      `Present options to International stakeholders & explain market specific benefits`,
      `Advise on integration plugin `,
      `Custom Theme development, aligned to brand guidelines`,
      `Manage team of in house developers`,
      `Daily stand-ups; breaking down what needs to be created, fixed and considered going forward`,
      `Present progress via weekly client demos`,
      `Work closely PM, BA, UI/UX & team to deliver project within set timescale`,
    ],
    techStack: [
      '/images/shopify.png',
      '/images/nodejs.png',
      '/images/docker.png',
      '/images/aws.png',
    ]
  },
  {
    company: 'Ralph & Russo',
    role: 'Full-stack Engineer',
    startDate: '01/2020',
    endDate: '09/2020',
    overview: '',
    achievements: [
      `Developed private section for international VIP customers`,
      `Ranked top 3 for ‘Super Luxury’ brands in UK, EU & USA`,
      `Bespoke integrations with partners such as Klarna, Zendesk & others.`,
    ],
    responsibilities: [
      `Oversee website structure & styling of international ecommerce stores`,
      `Consult on website re-design and customer flow`,
      `Oversee SEO/SEM of 8 international stores`,
      `Oversee partner on-boarding & integration`,
    ],
    techStack: []
  },
  {
    company: 'Baird & Co',
    role: 'Digital Marketing Consultant',
    startDate: '05/2019',
    endDate: '12/2019',
    overview: '',
    achievements: [
      `Achieved 5:1 ROI [Monthly budget of £4000 across marketing channels]`,
      `Reduced website bounce rate from 55% to 38%`,
      `Increased number of average sales per day from 4.5 to 6.1`,
      `Curated Customer Acquisition strategy across`,
      `Redesigned checkout process; making it easier for customers to make purchases while still capturing needed information for compliance`,
      `Redesigned sign up process; breaking it into digestible pieces and removing unnecessary processes`,
      `Maintain relationships with Spears Wealth Management, LBMA and other relevant industry partners`,
    ],
    responsibilities: [
      `Lead data focused business transformation gaining buy-in from wider team`,
      `Line manage Marketing team & Web Development agency`,
      `Digital Marketing Strategy for B2B & B2C channels`,
      `Manage SEO/SEM Campaigns`,
      `Monitor visitor behaviour and traffic [Organic and Paid]`,
      `Deliver bi-weekly meetings reporting Digital Performance`,
      `Propose and oversee data-led website redesign`,
      `Develop in depth understanding of customer needs & wants`,
      `Work in sync with compliance and other internal teams to ensure best practice across solutions`,
    ],
    techStack: []
  },
  {
    company: 'Harvard:',
    role: 'Lead Front-End Engineer',
    startDate: '09/2018',
    endDate: '05/2019',
    overview: '',
    achievements: [
      `Lead a team of web developers`,
      `Collaborate with stakeholders to establish project parameters and regular project progress`,
      `Create solutions, including; competitor analysis, site content, sitemaps`,
      `Integrate social media applications into websites and blogs`,
      `Create interface designs for integration into web applications`,
      `Create marketing campaigns and product pitches`,
      `Weekly Data reporting [Audience behaviour, Acquisition, etc]`,
      `Pitch, build & launch of data focused solutions as outlined in project briefs`,
      `SEO/SEM integration across company websites`,
      `Web development, maintenance & journey mapping`,
      `Data champion; responsible for implementation of tools used across all channels`,
    ],
    responsibilities: [],
    techStack: []
  },
  {
    company: 'Manage My Website',
    role: 'Frontend Engineer',
    startDate: '07/2017',
    endDate: '12/2018',
    overview: '',
    achievements: [
      `Design and manage e-commerce websites on Squarespace, Shopify & WordPress`,
      `Manage blogs, designed logos and marketing collateral`,
      `Provide internet related services including web site design, front-end web development, domain name registration, web hosting, search engine optimisation/submission`,
      `Train end-users how to perform necessary system updates`,
    ],
    responsibilities: [],
    techStack: []
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
          <h3 className="text-2xl">{job.company} | {job.role}</h3>
          <p>{job.startDate} - {job.endDate}</p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={handlePrevious} 
            className="px-4 py-2 border-2 border-black text-black bg-transparent rounded hover:bg-black hover:text-white"
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            className="px-4 py-2 border-2 border-black text-black bg-transparent rounded hover:bg-black hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
      {job.overview.trim().length > 0 && (
        <div className="w-full mb-8 space-y-4">
          <h4 className="text-xl font-bold text-left">Overview</h4>
          <p className='text-sm'>{job.overview}</p>
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* <div className="w-full md:w-1/2 space-y-4"> */}
        <div className={`w-full ${job.responsibilities.length > 0 ? 'md:w-1/2' : ''} space-y-4`}>
          <h4 className="text-xl font-bold text-left">Achievements</h4>
          <ul className="list-disc list-inside text-sm">
            {job.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        {job.responsibilities.length > 0 && (
          <div className="w-full md:w-1/2 space-y-4">
            <h4 className="text-xl font-bold text-left">Responsibilities</h4>
            <ul className="list-disc list-inside text-sm">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-full mt-8">
      {job.techStack.length > 0 && (
        <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default EmploymentHistory;