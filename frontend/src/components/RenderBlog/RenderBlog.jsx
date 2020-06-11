import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Styled from 'styled-components';

const BlogContainer = Styled.div`
  height: 100%;
`;

const RenderBlog = ({ initial_content }) => {
  return (
    <BlogContainer>
      {ReactHtmlParser(initial_content)}
    </BlogContainer>
  )
};

export default RenderBlog;