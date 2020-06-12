import PageHeader from 'components/PageHeader';
import ProgramCard from 'components/ProgramCard/ProgramCard';
import Section from 'layout/Section';
import React from 'react';
import Styled from 'styled-components';

import programData from './data';

const ProgramContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const pageHeaderProps = {
  title: 'Our Program',
  description:
    'We aren’t all about schoolwork and academics. We’re here to teach and guide international students how to live and succeed in America.'
};

const Program = () => {
  return (
    <Section>
      <PageHeader {...pageHeaderProps}></PageHeader>
      <ProgramContainer>
        {programData.map(program => {
          return <ProgramCard key={program.title} program={program} />;
        })}
      </ProgramContainer>
    </Section>
  );
};

export default Program;
