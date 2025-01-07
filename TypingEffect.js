import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

function TypingEffect() {
  return (
    <Typed
      strings={[
        'Software Engineer',
        'Front-End Developer',
        'Data Analyst',
        'Product Manager',
        'Research Assistant',
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );
}

export default TypingEffect;
