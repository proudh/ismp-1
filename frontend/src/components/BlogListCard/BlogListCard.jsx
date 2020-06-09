import React from 'react';
// import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {
  Card,
  BlogPreview,
  PreviewCont,
  PreviewImg,
  PreviewDescription,
  Category,
  Title,
  Blurb
} from './BlogListCard.styles';

const BlogListCard = ({ blogCard }) => {
  const { image_url, blurb, title, sub_header, category, blog_url } = blogCard;

  const finalBlurb = text => {
    return text.length > 500 ? `${text.substr(0, 500)}...` : text;
  };

  return (
    <Card>
      <BlogPreview>
        <PreviewCont>
          <PreviewImg src={image_url} alt={title} />
        </PreviewCont>
        <PreviewDescription>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Blurb>{finalBlurb(blurb)}</Blurb>
          <a href={blog_url}>link</a>
        </PreviewDescription>
      </BlogPreview>
    </Card>
  );
};

export default BlogListCard;
