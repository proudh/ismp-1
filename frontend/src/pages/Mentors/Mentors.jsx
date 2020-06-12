import Section from '../../layout/Section';
import React from 'react';
import MentorCards from '../../components/MentorCards/MentorCards';
import { BodyContainer } from '../../layout/BodyContainer/BodyContainer';

const Mentors = () => {
  return (
    <BodyContainer>
      <Section>
        <h2>Our Mentors</h2>
        <h3>We have a high bar for our mentors. </h3>
      </Section>
      <MentorCards />
    </BodyContainer>
  );
};

export default Mentors;
