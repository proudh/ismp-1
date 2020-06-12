import MentorCards from 'components/MentorCards/MentorCards';
import PageHeader from 'components/PageHeader';
import Section from 'layout/Section';
import React from 'react';

const Mentors = () => {
  return (
    <Section>
      <PageHeader title="Meet Our Mentors"></PageHeader>
      <MentorCards />
    </Section>
  );
};

export default Mentors;
