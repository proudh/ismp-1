import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const ItemContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  max-width: 1060px;

  ${media.phone`flex-direction: column;align-items: center;`};
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 200px;
  margin: 30px;
  overflow: hidden;

  ${media.phone`width: 80%;`};
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.div`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

const SubHeader = styled.div`
  margin: 8px 0;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 30px;
  width: 60%;

  font-family: Poppins;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;

  ${media.phone`width: 80%;margin-top: 0;`};
`;

const StyledLink = styled.a`
  margin-top: 8px;
  width: fit-content;
  ${mixins.inlineLink}
`;

export class BlogList extends React.Component {
  description(text) {
    // Add ellipsis if text is more than 500 characters
    const ellipsis = '...';
    const overflow = text.length > 500 ? ellipsis : '';
    return `${text.substr(0, 500)}${overflow}`;
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <ItemContainer key={index}>
                <ImageContainer>
                  <Image src={item.imageUrl} alt="image" />
                </ImageContainer>

                <Content>
                  <Title>{item.title}</Title>
                  <SubHeader>{item.subHeader}</SubHeader>
                  <div>{this.description(item.description)}</div>
                  <StyledLink href={item.link}>Read more</StyledLink>
                </Content>
              </ItemContainer>
            );
          })}
      </div>
    );
  }
}

export default BlogList;
