import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { SubscribeNewsletter } from 'utils/agent';

const Container = styled.div`
  /* grid-column: 1 / 15; */
  width: 100%;
  padding: 40px;
<<<<<<< HEAD
  background-color: ${theme.colors.blue};
=======
  background-color: ${theme.colors.darkGrey};
>>>>>>> b42faced4326768c24a3a89eccac09f028d5b6bc
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
  width: 40%;
  min-width: 450px;
  height: 40px;
  /* box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.1); */
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSizes.xs};
`;

const SearchButton = styled(Button)`
  &&& {
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.black};
    background: ${theme.colors.yellow};
  }
`;

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const submitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

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
    //     console.log(data.value);
    setEmail(data.value);
  };

  return (
    <Container>
      <Title>Subscribe to our monthly newsletter</Title>
      {/* <SearchContainer> */}
      <StyledInput
        fluid
        placeholder="Email Address"
        type="email"
        onChange={handleChange}
        action
        label={
          <SearchButton
            type="submit"
            onClick={handleSubmit}
            content="Subscribe"
          />
        }
        labelPosition="right"
      />
      {/* <input onKeyPress={submitOnEnter} /> */}
      {/* </StyledInput> */}
      {/* </SearchContainer> */}
    </Container>
  );
};

export default Subscribe;
