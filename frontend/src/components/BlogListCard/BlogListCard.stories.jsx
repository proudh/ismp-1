import React from 'react';
import BlogListCard from './BlogListCard';

export default {
  component: BlogListCard,
  title: 'BlogListCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <BlogListCard />;
