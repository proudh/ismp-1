import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { requests } from 'utils/agent';
import moment from 'moment';

import Styled from 'styled-components';
import RenderBlog from 'components/RenderBlog';

const arrowLeft = require('../../images/arrow-left-purple.png');

const Container = Styled.div`
  margin: 5% 0;
`;

const BlogContentContainer = Styled.div`
  width: 100%;
`;

const BlogTopic = Styled.div`
  font-family: ${props => props.theme.fonts.Poppins};
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;

const BlogTitle = Styled.div`
  font-family: ${props => props.theme.fonts.PTSerif};
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  line-height: 84px;
  margin-top: 16px;
`;

const BlogHomeLink = Styled(Link)`
  display: flex;
  font-size: 18px;
  margin-left: 10%;
  color: ${props => props.theme.colors.purple};
  align-items: center;
  
  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const ArrowLeft = Styled.img`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

const DateAndAuthor = Styled.div`
  font-size: 18px;
  font-style: italic;
  text-align: center;
`;

const BlogDataContainer = Styled.div`
  width: 60%;
  margin-top: 24px;
  font-family: ${props => props.theme.fonts.Poppins};
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.PTSerif};
  }
  & h1 {
    font-size: ${props => props.theme.fontSizes.h1};
  }
  & h2 {
    font-size: ${props => props.theme.fontSizes.h2};
  }
  & h3 {
    font-size: ${props => props.theme.fontSizes.h3};
  }
  & p {
    font-size: ${props => props.theme.fontSizes.p};
  }
`;

const GetConnected = Styled.div`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.h3};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  margin-top: 64px;
`;

const ApplyNowBtn = Styled(Link)`
  width: 135px;
  height: 36px;
  background-color: ${props => props.theme.colors.yellow};
  font-size: ${props => props.theme.fontSizes.p};
  color: ${props => props.theme.colors.black};
  font-weight: normal;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 48px;

   &:hover {
    color: ${props => props.theme.colors.black};
   }
`;

const RecommendedArticlesHeader = Styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 64px 10%;
  font-size: ${props => props.theme.fontSizes.h3};
  font-family: ${props => props.theme.fonts.PTSerif};
`;

const Line = Styled.div`
  width: 360px;
  border-style: solid;
  border-color: ${props => props.theme.colors.black};
  border-width: 1px;
  opacity: 0.5;
`;

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        'This is the blogpost page for blogpostcontent id ' +
        props.match.params.id,
      blogpostcontent_id: props.match.params.id,
      blogpostcontent: {}
    };
  }

  componentDidMount() {
    requests
      .get('blogpostcontent/' + this.state.blogpostcontent_id + '/')
      .then(result => {
        this.setState({
          blogpostcontent: result,
          content: result.body_content
        });
      });
  }

  render() {
    console.log('blogpostcontent: ', this.state.blogpostcontent);
    const bio = this.state.blogpostcontent.blogpost && this.state.blogpostcontent.blogpost.author.bio;
    return (
      <Container>
        <BlogContentContainer>
          <BlogHomeLink to="/blog">
            <ArrowLeft src={arrowLeft} alt="arrow-left"/>
            Blog Home
          </BlogHomeLink>
          <BlogTopic>{this.state.blogpostcontent.title_content}</BlogTopic>
          <BlogTitle>{this.state.blogpostcontent.title_content}</BlogTitle>
          <DateAndAuthor>
            {moment(this.state.blogpostcontent.publish_at).format('MMMM DD, YYYY')} by {bio ? bio : 'Unknown Author'}
          </DateAndAuthor>
          <BlogDataContainer>
            <RenderBlog
              blogpostcontent_id={this.state.blogpostcontent_id}
              initial_content={this.state.content}
            />
          </BlogDataContainer>
        </BlogContentContainer>
        <GetConnected>
          Get connected with a mentor today
          <ApplyNowBtn to="/application-form">APPLY NOW</ApplyNowBtn>
        </GetConnected>
        <RecommendedArticlesHeader>
            <Line></Line>
            Recommended Articles
            <Line></Line>
          </RecommendedArticlesHeader>
      </Container>
    );
  }
}

export default withRouter(Blogpost);
