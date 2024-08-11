import React from 'react';

const PersonalStatement: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left">
        Personal Statement
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. In laoreet, magna ut rutrum egestas, libero est fermentum eros, eget imperdiet nisl turpis sed quam. Nunc ac nisi id odio porttitor vestibulum eget a urna. Nunc nec dolor eros. Phasellus eget lacus nec mauris vehicula hendrerit.
          </p>
          <p>
            Praesent laoreet, elit ut efficitur laoreet, dui nibh pellentesque magna, sed luctus libero lacus ac velit. Vestibulum in libero euismod, pharetra purus a, vestibulum lectus. Sed nec sem ex. Sed ornare rutrum bibendum. Cras ac arcu quam. Cras sodales nisi a pretium fermentum. Etiam tempus ornare diam nec placerat.
          </p>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <p>
            Curabitur et turpis vitae neque finibus facilisis non sed erat. Maecenas et porta purus, ut gravida eros. Curabitur auctor est sit amet arcu vehicula, ut posuere augue porttitor. Nullam volutpat, nulla a aliquam dictum, eros turpis hendrerit orci, quis lobortis nisl felis non dolor. Nullam ultricies magna sem, quis tincidunt eros suscipit a. Morbi cursus ligula ut ligula vehicula, gravida maximus tortor venenatis.
          </p>
          <p>
            Etiam ultricies sem nec lectus feugiat, a vehicula risus aliquam. Morbi tincidunt, mi id finibus laoreet, lacus massa gravida lacus, a bibendum turpis elit ut nibh. Mauris pulvinar mi quis augue feugiat, non hendrerit nulla interdum. Sed vel magna vitae arcu tristique fermentum. Integer et sapien consequat, venenatis enim et, auctor dui. Aenean quis tincidunt odio, id pharetra nunc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalStatement;