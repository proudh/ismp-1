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
        testimonial: 'I joined ISMP and now I am writing a testimonial. Here is one that is two sentences long.'
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
        testimonial: 'I feel like writing a very long testimonial, so here goes: looooooooooonggggggggggg ttttttessstimoniallllllllllllllllllllllll. This is a lot of text. Hopefully this looks okay on the UI. What happens now? Who knows? '
    }
];

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  width: 270px;
  height: 285px;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 25%;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid grey;
  margin: 0.5em 0;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
`;
const QuoteAndContentContainer = styled.div`
  height:75%;
  overflow: auto;
`;
const Quote = styled.div`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.sm};
  // height: 130px;
  margin-top: -50px;
  position: relative;
  bottom: 0px;
`;

const BigQuotationMarkContainer = styled.div`
  text-align: center;
  width: 100%;
`;
const BigQuotationMark = styled.div`
  color: ${theme.colors.blue};
  display: inline-block;
  font-family: ${theme.fonts.PTSerif};
  font-size: 56px;
  line-height: 84px;
  margin-top: -10px;
  text-align: center;
`;

export class TestimonialCards extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row computer={1} mobile={16} tablet={2}>
                    <Container>

                {mentorsInfo.map((info, i) => {
                    return (
                        <TestimonialCard key={i}>
                                    <QuoteAndContentContainer>
                                    <BigQuotationMarkContainer>
                                        <BigQuotationMark>“</BigQuotationMark>
                                    </BigQuotationMarkContainer>


                            <Content>
                                <Quote>{info.testimonial}</Quote>
                            </Content>
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
                </Grid.Row>
            </Grid>
        );
    }
}

export default TestimonialCards;
