import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

function TypingEffect() {
  return (
    <Typed
      strings={[
        'Product Manager',
        'Data Analyst',
        'AI/ML Engineer',
        'Software Developer',
        'Data Engineer',
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );
}

export default TypingEffect;
