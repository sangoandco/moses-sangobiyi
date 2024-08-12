import React from 'react';
import Image from 'next/image';

const softwareLogos = [
  { name: 'bootstrap', src: '/images/bootstrap.png' },
  { name: 'docker', src: '/images/docker.png' },
  { name: 'mongodb', src: '/images/mongodb.png' },
  { name: 'terraform', src: '/images/terraform.png' },
  { name: 'git', src: '/images/git.png' },
  { name: 'nodejs', src: '/images/nodejs.png' },
  { name: 'tailwind', src: '/images/tailwind.png' },
  { name: 'kubernetes', src: '/images/kubernetes.png' },
  { name: 'jira', src: '/images/jira.png' },
  { name: 'postgres', src: '/images/postgres.png' },
  { name: 'aws', src: '/images/aws.png' },
  { name: 'auth0', src: '/images/auth0.png' },
  { name: 'azure', src: '/images/azure.png' },
  { name: 'nextjs', src: '/images/nextjs.png' },
  { name: 'openai', src: '/images/openai.png' },
  { name: 'react', src: '/images/react.png' },
  { name: 'html', src: '/images/html.png' },
  { name: 'css', src: '/images/css.png' },
  { name: 'javascript', src: '/images/javascript.png' },
  { name: 'typescript', src: '/images/typescript.png' },
];

const Software: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Software Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {softwareLogos.map((logo) => (
          <div key={logo.name} className="flex justify-center items-center p-4 bg-white ">
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Software;