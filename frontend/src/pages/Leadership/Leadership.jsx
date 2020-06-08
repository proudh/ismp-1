import Section from '../../layout/Section';
import React from 'react';
import LeadershipCard from '../../components/LeadershipCard/LeadershipCard';
import { Container } from 'semantic-ui-react';
import Styled from 'styled-components';

import leadershipData from './data';

const CardContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Leadership = () => {
  return (
    <Container>
      <Section>
        <h2>Leadership</h2>
        <h3>Officers</h3>
        <CardContainer>
          {leadershipData.officers.map(officer => {
            return <LeadershipCard key={officer.name} leader={officer} />;
          })}
        </CardContainer>
        <h3>Directors</h3>
        <CardContainer>
          {leadershipData.directors.map(director => {
            return <LeadershipCard key={director.name} leader={director} />;
          })}
        </CardContainer>
      </Section>
    </Container>
  );
};

export default Leadership;
