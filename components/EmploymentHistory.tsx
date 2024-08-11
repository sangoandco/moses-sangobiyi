import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const employmentData = [
  {
    company: 'Company A',
    startDate: '01/01/2020',
    endDate: '31/12/2024',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.',
    achievements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.',
    responsibilities: 'Curabitur et turpis vitae neque finibus facilisis non sed erat. Maecenas et porta purus, ut gravida eros.'
  },
  {
    company: 'Company B',
    startDate: '01/01/2016',
    endDate: '31/12/2019',
    overview: 'Nullam volutpat, nulla a aliquam dictum, eros turpis hendrerit orci, quis lobortis nisl felis non dolor.',
    achievements: 'Praesent laoreet, elit ut efficitur laoreet, dui nibh pellentesque magna, sed luctus libero lacus ac velit.',
    responsibilities: 'Etiam ultricies sem nec lectus feugiat, a vehicula risus aliquam.'
  }
  // Add more roles as needed
];

const EmploymentHistory: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Employment History
      </h2>
      <Slider {...settings}>
        {employmentData.map((job, index) => (
          <div key={index}>
            <div className="mb-8 text-left font-bold">
              <h2 className="text-3xl">
                {job.company}
              </h2>
              <p>{job.startDate} - {job.endDate}</p>
            </div>
            <div className="w-full mb-8 space-y-4">
              <h3 className="text-xl font-bold text-left">
                Overview
              </h3>
              <p>{job.overview}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl font-bold text-left">
                  Achievements
                </h3>
                <p>{job.achievements}</p>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl font-bold text-left">
                  Responsibilities
                </h3>
                <p>{job.responsibilities}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EmploymentHistory;