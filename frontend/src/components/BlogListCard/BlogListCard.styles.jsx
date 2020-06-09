import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
  padding: 15px 0;
`;

export const BlogPreview = styled.div`
  display: flex;
`;

export const PreviewCont = styled.div`
  width: 360px;
`;

export const PreviewImg = styled.img`
  width: 100%;
  border: 1px solid grey;
  padding: 2px;
`;

export const PreviewDescription = styled.div`
  width: 60%;
  padding: 5px 15px 5px 10px;
`;

export const Category = styled.h4`
  font-size: ${theme.fontSizes.sm};
  font-style: italic;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.md};
`;

export const Blurb = styled.div`
  font-size: ${theme.fontSizes.sm};
  margin-top: 10px;
`;
