import React from 'react';
import {Container} from 'semantic-ui-react';

const style = {
  body: {
    paddingTop: '1rem',
  }
};

export const BodyContainer = ({ children }) => {
  return (
    <Container style={style.body}>
      {children}
    </Container>
  )
};
