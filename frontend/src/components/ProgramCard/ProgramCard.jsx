import React from 'react';

import {
  Card,
  Program,
  IconCont,
  IconImg,
  ProgramDescription,
  Title,
  Separator,
  Blurb
} from './ProgramCard.styles';

const ProgramCard = ({ program }) => {
  const { iconImage, title, blurb } = program;

  return (
    <Card>
      <Program>
        <IconCont>
          <IconImg src={iconImage} alt={title} />
        </IconCont>
        <ProgramDescription>
          <Title>{title}</Title>
          <Separator />
          <Blurb>{blurb}</Blurb>
        </ProgramDescription>
      </Program>
    </Card>
  );
};

export default ProgramCard;
