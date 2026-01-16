import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

function TypingEffect() {
  return (
    <Typed
      strings={[
        'Data Engineer',
        'Data Analyst',
        'Data Governance',
        'Front-End Developer',
        'Software Engineer',
        'Research Assistant',
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );
}

export default TypingEffect;
