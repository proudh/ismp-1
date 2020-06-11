import React, { useState } from 'react';
import Styled from 'styled-components';
import Subscribe from 'components/Subscribe';
import WebinarHighlight from 'components/WebinarHighlight';
import { Link, useParams } from 'react-router-dom';
import HeroImage from 'components/HeroImage/HeroImage';
import TestimonialCards from "components/TestimonialCards/TestimonialCards";
import theme from '../../styles/theme';
import { Blogposts } from '../../utils/agent';
import { useTranslation } from 'react-i18next';
import { Embed } from 'semantic-ui-react';

// TODO: Just testing things out
const MentorContainer = Styled.div`
  padding: 1.5em 17.5%;
  background-color: ${theme.colors.darkYellow}
`;

const MentorTitle = Styled.h3`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
`;

const DuoContainer = Styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  align-items: flex-start;
  margin: 2em 0;
  padding: 0 13.5%;
`;

const SubTitle = Styled.h3`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h2};
`;

const StyledParagraph = Styled.p`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSizes.sm};
  line-height: 2rem;
`;

const TitleContainer = Styled.div`
  display: flex;
  padding: 0 13.5%;
  align-items: baseline;
`;

const StyledLink = Styled(Link)`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.purple};
    padding: 0 2rem; 
`;

const Home = () => {
  const { t } = useTranslation('home');

  // console.log(useParams);
  const [featuredBlogs, setFeaturedBlogs] = useState([
    {
      title_content: 'placeholder',
      body_content: 'something'
    },
    {
      title_content: 'placeholder 2',
      body_content: 'something'
    },
    {
      title_content: 'placeholder 3',
      body_content: 'something'
    }
  ]);

  Blogposts.getFeatured().then(data => {
    // TODO: use setFeaturedBlogs to update featuredBlogs from the backend data
    // make sure to only update if it is in the initial state, otherwise it will
    // cause an inifinite loop
    if (featuredBlogs[0].title_content !== data[0].title_content) {
      setFeaturedBlogs(data);
    }
  });

  return (
    <>
      <HeroImage />
      <DuoContainer>
        <div>
          <SubTitle>{t('who_section.title')}</SubTitle>
          <StyledParagraph>{t('who_section.blurb')}</StyledParagraph>
        </div>
        <Embed
          aspectRatio="16:9"
          autoplay={false}
          active={true}
          icon="arrow circle down"
          id="Pcmwvi212jE"
          iframe={{ allowFullScreen: true }}
          placeholder="/images/image-16by9.png"
          source="youtube"
        />
      </DuoContainer>

      <MentorContainer>
        <MentorTitle>{t('mentor_section.title')}</MentorTitle>
        <StyledParagraph>{t('mentor_section.blurb')}</StyledParagraph>
      </MentorContainer>

      <DuoContainer>
        <div>
          <SubTitle>{t('diff_section.title')}</SubTitle>
          <StyledParagraph>{t('diff_section.blurb')}</StyledParagraph>
        </div>
        <Embed
          aspectRatio="16:9"
          autoplay={false}
          active={true}
          icon="arrow circle down"
          id="Pcmwvi212jE"
          placeholder="/images/image-16by9.png"
          source="youtube"
        />
      </DuoContainer>
        <TestimonialCards />

      <TitleContainer>
        <SubTitle>Webinar Highlights</SubTitle>
        <StyledLink to="/">view all</StyledLink>
      </TitleContainer>

      <DuoContainer style={{ marginTop: 0 }}>
        <WebinarHighlight id="Pcmwvi212jE" title="test 1" blog="" />
        <WebinarHighlight id="Pcmwvi212jE" title="test 2" blog="" />
      </DuoContainer>

      <TitleContainer>
        <SubTitle>Featured Blog Articles</SubTitle>
        <StyledLink to="/">view all</StyledLink>
      </TitleContainer>

      <ul>
        {featuredBlogs.map((blog, index) => (
          <li key={index}>
            Title: {blog.title_content}, Description {blog.body_content}
          </li>
        ))}
      </ul>
      <Subscribe />
    </>
  );
};

export default Home;
