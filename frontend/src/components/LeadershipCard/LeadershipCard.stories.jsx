import React from 'react';
import LeadershipCard from './LeadershipCard';

export default {
  component: LeadershipCard,
  title: 'LeadershipCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <LeadershipCard />;
