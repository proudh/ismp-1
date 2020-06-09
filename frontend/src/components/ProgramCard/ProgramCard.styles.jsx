import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
  flex: 0 48%;
  padding: 20px 10px;
  border: 1px solid ${theme.colors.darkGrey};
  margin: 10px 5px;
  border-radius: 10px;
  background-color: ${theme.colors.lightGrey};
  min-height: 230px;
`;

export const Program = styled.div`
  display: flex;
`;

export const IconCont = styled.div`
  width: 10%;
`;

export const IconImg = styled.img`
  width: 100%;
  padding: 2px;
`;

export const ProgramDescription = styled.div`
  width: 90%;
  padding: 0 25px 10px 25px;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.md};
`;

export const Separator = styled.hr`
  border-color: ${theme.colors.lightGrey};
`;

export const Blurb = styled.p`
  font-size: ${theme.fontSizes.sm};
  margin-top: 10px;
`;
