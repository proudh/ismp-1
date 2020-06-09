import Section from '../../layout/Section';
import React from 'react';
import ProgramCard from '../../components/ProgramCard/ProgramCard';
import { Container } from 'semantic-ui-react';
import Styled from 'styled-components';

import programData from './data';

const ProgramContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Header = Styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const Program = () => {
  return (
    <Container>
      <Section>
        <Header>
          <h2>Our Program</h2>
          <p>
            We aren’t all about schoolwork and academics. We’re here to teach
            and guide international students how to live and succeed in America.
          </p>
        </Header>
        <ProgramContainer>
          {programData.map(program => {
            return <ProgramCard key={program.title} program={program} />;
          })}
        </ProgramContainer>
      </Section>
    </Container>
  );
};

export default Program;
