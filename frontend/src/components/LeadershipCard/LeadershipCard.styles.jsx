import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
  flex: 0 50%;
  padding: 15px 0;
`;

export const Leader = styled.div`
  display: flex;
`;

export const Profile = styled.div`
  width: 40%;
`;

export const ProfileImg = styled.img`
  width: 100%;
  border: 1px solid grey;
  padding: 2px;
`;

export const LeaderDescription = styled.div`
  width: 60%;
  padding: 5px 15px 5px 10px;
`;

export const Title = styled.h4`
  font-size: ${theme.fontSizes.sm};
  font-style: italic;
`;

export const Name = styled.h3`
  font-size: ${theme.fontSizes.md};
  margin-top: 10px;
`;

export const CredentialList = styled.ul`
  list-style-type: none;
  padding-left: 10px;
  font-size: ${theme.fontSizes.xs};
`;

export const CurrentJob = styled.div`
  font-size: ${theme.fontSizes.xs};
  margin-top: 10px;
  padding-left: 10px;
`;
