import React from 'react';
import TestimonialCards from './TestimonialCards';

export default {
  component: TestimonialCards,
  title: 'TestimonialCards',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <TestimonialCards />;
