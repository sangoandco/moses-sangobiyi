import React from 'react';
import Image from 'next/image';

const Interests: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Personal Interests
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-left">Sports and Leadership</h3>
          <p className="text-sm">
            I am a former athlete, having played American Football at national and international levels. My peak was taking part in trials with the Baltimore Ravens and captaining the London Warriors to multiple National Championships. I still have an interest in the NFL.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/warriors.jpg"
              alt="American Football"
              width={600}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-left">Corporate Engagement and AI</h3>
          <p className="text-sm">
            I judge the Corporate Engagement Awards; which has provided me with insight into how companies are engaging audiences and positioning themselves to customers. I have a deep interest in AI and have won awards for an academic mentoring project I developed during a London based Hackathon.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/cea.png"
              alt="Corporate Engagement Awards"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;