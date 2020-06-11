import React from 'react';
import theme from '../../styles/theme';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Embed } from 'semantic-ui-react';

const WebinarLink = Styled(Link)`
    font-family: ${theme.fonts.PTSerif};
    font-weight: bold;
    font-style: normal;
    font-size: ${theme.fontSizes.sm};
    padding: 0;
    color: ${theme.colors.purple};
    &:hover: {
      color: ${theme.colors.darkYellow};
    }
`;

const WebinarHighlight = ({ title, id, blog }) => {
  return (
    <div>
      <Embed
        aspectRatio="16:9"
        autoplay={false}
        active={true}
        icon="arrow circle down"
        id={id}
        placeholder="/images/image-16by9.png"
        source="youtube"
      />
      <div style={{ height: '0.5rem' }} />
      <WebinarLink as={Link} to={blog}>
        Highlights from {title} Webinar
      </WebinarLink>
    </div>
  );
};

export default WebinarHighlight;
