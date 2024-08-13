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
          <h3 className="text-2xl font-bold text-left">Interest 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. In laoreet, magna ut rutrum egestas, libero est fermentum eros, eget imperdiet nisl turpis sed quam. Nunc ac nisi id odio porttitor vestibulum eget a urna. Nunc nec dolor eros. Phasellus eget lacus nec mauris vehicula hendrerit.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/nextjs.png"
              alt="Interest 1"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-left">Interest 2</h3>
          <p>
            Curabitur et turpis vitae neque finibus facilisis non sed erat. Maecenas et porta purus, ut gravida eros. Curabitur auctor est sit amet arcu vehicula, ut posuere augue porttitor. Nullam volutpat, nulla a aliquam dictum, eros turpis hendrerit orci, quis lobortis nisl felis non dolor. Nullam ultricies magna sem, quis tincidunt eros suscipit a. Morbi cursus ligula ut ligula vehicula, gravida maximus tortor venenatis.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/nextjs.png"
              alt="Interest 2"
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