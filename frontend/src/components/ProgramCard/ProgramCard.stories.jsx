import React from 'react';
import ProgramCard from './ProgramCard';

export default {
  component: ProgramCard,
  title: 'ProgramCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <ProgramCard />;
