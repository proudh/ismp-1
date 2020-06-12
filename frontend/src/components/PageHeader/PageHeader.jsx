import React from 'react';
import Styled from 'styled-components';

const Header = Styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const PageHeader = ({ title, description }) => (
  <Header>
    <h2>{title}</h2>
    {!!description ? <p>{description}</p> : ''}
  </Header>
);

export default PageHeader;
