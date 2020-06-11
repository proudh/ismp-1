import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Grid } from 'semantic-ui-react';

// TODO: come from an API later
const mentorsInfo = [
  {
    image: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    name: 'Matthew Lastname',
    location: 'Los Angeles, CA',
    education: 'U.C. Berkeley',
    career: 'Software Engineer',
    skills: 'English Training, Web Development',
    testimonial:
      'I joined ISMP and now I am writing a testimonial. Here is one that is two sentences long.'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/molly.png',
    name: 'Molly Lastname',
    location: 'Los Angeles, CA',
    education: 'U.C. San Diego',
    career: 'UI Engineer',
    skills: 'English Training, Web Development',
    testimonial: 'It was good'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
    name: 'Jennifer Lastname',
    location: 'Los Angeles, CA',
    education: 'U.C. Irvine',
    career: 'UX Engineer',
    skills: 'English Training, Web Development',
    testimonial:
      'I feel like writing a very long testimonial, so here goes: looooooooooonggggggggggg ttttttessstimoniallllllllllllllllllllllll. This is a lot of text. Hopefully this looks okay on the UI. What happens now? Who knows? '
  }
];

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  padding: 1em 13.5%;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f2f9fa;
  margin-bottom: 2em;
`;

const TestimonialCard = styled.div`
  width: 270px;
  min-width: 270px;
  height: 285px;
  border-radius: 10px;
  box-shadow: 0 5px 5px ${theme.colors.darkGrey};
  background-color: #fafafa;
  padding: 0.25em 1em 1.5em 1em;
  margin: 1em;
  font-family: ${theme.fonts.PTSerif};
`;

const QuoteAndContentContainer = styled.div`
  height: 61%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const QuoteStyle = styled.h1`
  width: 100%;
  min-height: 32px;
  height: 32px;
  font-family: ${theme.fonts.PTSerif};
  font-size: 56px;
  margin: 0;
  text-align: center;
`;

const BigQuotationMark = ({ index }) => {
  if (index % 2 === 1) {
    return (
      <QuoteStyle style={{ color: `${theme.colors.lightBlue}` }}>“</QuoteStyle>
    );
  }
  return <QuoteStyle style={{ color: `${theme.colors.yellow}` }}>“</QuoteStyle>;
};

const Quote = styled.div`
  width: 100%;
  overflow: hidden;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.sm};
  text-align: center;
  word-wrap: break-word;
  line-height: 30px;
`;

const Divider = styled.div`
  width: 3.5em;
  height: 1px;
  border-bottom: 1px solid grey;
  margin: 0.5em auto;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 39%;
  padding: 0.5em;
  font-style: ${theme.fonts.PTSerif};
`;

const Description = styled.div`
  color: black;
  font-size: ${theme.fontSizes.sm};
`;

const Image = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export class TestimonialCards extends React.Component {
  render() {
    return (
      <Container>
        {mentorsInfo.map((info, i) => {
          return (
            <TestimonialCard key={i}>
              <QuoteAndContentContainer>
                <BigQuotationMark index={i} />
                <Quote>{info.testimonial}</Quote>
              </QuoteAndContentContainer>

              <Divider />

              <Profile>
                <Image src={info.image} alt="test" />
                <Description>{info.name}</Description>
              </Profile>
            </TestimonialCard>
          );
        })}
      </Container>
    );
  }
}

export default TestimonialCards;
