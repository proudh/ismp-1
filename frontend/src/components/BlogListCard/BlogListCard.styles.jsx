import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
  padding: 15px 0;
`;

export const BlogPreview = styled.div`
  display: flex;
`;

export const PreviewCont = styled.div`
  width: 360px;
  position: relative;
  border: 1px solid grey;
`;

export const WebinarOnly = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 25px); // With icon width 50px
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const grayScaleImage = css`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

const getWebinarStyling = props => {
  return props.gray ? grayScaleImage : null;
};

export const PreviewImg = styled.img`
  width: 100%;
  padding: 2px;

  ${getWebinarStyling}
`;

export const PreviewDescription = styled.div`
  width: 60%;
  padding: 5px 15px 5px 20px;
`;

export const Category = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-style: italic;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.md};
  margin-top: 5px;
`;

export const Blurb = styled.div`
  font-size: ${theme.fontSizes.p};
  margin-top: 10px;
`;
