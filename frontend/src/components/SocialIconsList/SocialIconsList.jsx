import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

const socialMediaList = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/internationalstudentmp',
    color: 'facebook'
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/internationalstudentmp/',
    color: 'instagram'
  },
  { icon: 'wechat', url: 'https://www.wechat.com/en', color: 'green' }
];

const HeaderContainer = styled.div`
  margin-left: 15px;
  margin-top: 15px;
`;

const SocialIconList = ({ isHeader }) => {
  const socialMediaIconList = socialMediaList.map((social, index) => {
    return (
      <HeaderContainer key={social.icon} >
        <a href={social.url} target="_blank" rel="noopener noreferrer">
          <Button
            className={`ui ${social.icon} icon button`}
            color={isHeader ? 'grey' : social.color}
            basic={isHeader}
          >
            <i className={`${social.icon} icon`}></i>
          </Button>
        </a>
      </HeaderContainer>
    );
  });

  return <Button.Group horizontal="true">{socialMediaIconList}</Button.Group>;
};

export default SocialIconList;
