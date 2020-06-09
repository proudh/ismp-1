import React from 'react';
import BlogListCard from '../BlogListCard/BlogListCard';

const BlogList = ({ blogList }) => {
  return (
    <>
      {blogList &&
        blogList.map((blogCard, index) => {
          return <BlogListCard key={index} blogCard={blogCard} />;
        })}
    </>
  );
};

export default BlogList;
