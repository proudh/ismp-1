import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {
  Card,
  Leader,
  Profile,
  ProfileImg,
  LeaderDescription,
  Title,
  Name,
  CurrentJob,
  CredentialList
} from './LeadershipCard.styles';

const LeadershipCard = ({ leader }) => {
  const {
    image,
    name,
    title,
    credentials,
    current_job,
    linkedin_url,
    staff_url
  } = leader;

  return (
    <Card>
      <Leader>
        <Profile>
          <ProfileImg src={image} alt={name} />
        </Profile>
        <LeaderDescription>
          {title.toLowerCase() !== 'director' && <Title>{title}</Title>}
          <Name>{name}</Name>
          <CredentialList>
            {credentials.map((cred, index) => {
              return <li key={`cred_${index}`}>{cred}</li>;
            })}
          </CredentialList>
          <CurrentJob>
            <p>
              {current_job}{' '}
              {linkedin_url && (
                <a
                  href={linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" color="blue" />
                </a>
              )}
              {staff_url && (
                <a href={staff_url} target="_blank" rel="noopener noreferrer">
                  <Icon name="linkify" color="blue" />
                </a>
              )}
            </p>
          </CurrentJob>
        </LeaderDescription>
      </Leader>
    </Card>
  );
};

export default LeadershipCard;
