import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { SubscribeNewsletter } from 'utils/agent';

const Container = styled.div`
  /* grid-column: 1 / 15; */
  width: 100%;
  padding: 40px;
  background-color: ${theme.colors.blue};
  text-align: center;
  display: grid;
  justify-items: center;
`;

const Title = styled.h3`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
  color: ${theme.colors.white};
  margin-bottom: 24px;
`;

const StyledInput = styled(Input)`
  &&& {
    width: 50%;
    min-width: 32rem;
    height: 3rem;
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.xs};
  }
`;

const SearchButton = styled(Button)`
  &&& {
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    color: ${theme.colors.black};
    background: ${theme.colors.yellow};
    /* width: 30%; */
  }
`;

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    let body = {
      email: email
    };

    SubscribeNewsletter.post(body).then(response => {
      if (response['error']) {
        alert(response['error']);
      } else {
        alert('Successfully subscribed to mailing list');
      }
    });
  };

  const handleChange = (event, data) => {
    event.preventDefault();
    event.stopPropagation();
    setEmail(data.value);
  };

  return (
    <Container>
      <Title>Subscribe to our monthly newsletter</Title>
      <StyledInput
        fluid
        placeholder="Email Address"
        type="email"
        onChange={handleChange}
        action={
          <SearchButton
            type="submit"
            onClick={handleSubmit}
            content="Subscribe"
          />
        }
        actionPosition="right"
      />
    </Container>
  );
};

export default Subscribe;
