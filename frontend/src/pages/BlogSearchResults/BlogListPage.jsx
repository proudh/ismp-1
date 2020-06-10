import React, { useState, useEffect } from 'react';
import BlogList from '../../components/BlogList/BlogList';
import Spinner from '../../components/Spinner/Spinner.component';

import { Input, Form, Select, Container } from 'semantic-ui-react';
import blogListData from './data';

import { requests } from '../../utils/agent';

import {
  SearchWrapper,
  SearchFieldWrapper,
  Header,
  BackButton,
  FilterWrapper
} from './BlogListPage.styles';

import { topicFilterOptions } from './BlogListPageOptions';

const BlogSearch = ({ term }) => {
  const defaultInputState = {
    searchTerm: term ? term : '',
    topics: 'all'
  };

  // THIS SHOULD BE FALSE WHEN MERGING CODE
  const DEBUG = true;

  const [searchInputs, setSearchInputs] = useState(defaultInputState);

  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Component Did Mount
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setSearchResults(blogListData);
      setIsLoading(false);
    }, 5000);
  }, [DEBUG]);

  // Search Input
  const handleInputChange = (e, data) => {
    setSearchInputs(searchInputs => ({
      ...searchInputs,
      [data.name]: data.value
    }));
  };

  const handleSubmit = e => {
    if (e.key === 'Enter') {
      console.log('handle submit', e, searchInputs);
      fetchResultResponse().then(result => {
        if (result) {
          console.log(result);
        }
      });
    }
  };

  // TODO: Fetch up Request, Reduce the response - SANITIZE
  const fetchResultResponse = () => {
    const queryParamSearch =
      searchInputs.searchTerm.length > 0
        ? `query='${searchInputs.searchTerm}'`
        : '';

    console.log(searchInputs);
    const queryParamTopic =
      searchInputs.topics !== 'all'
        ? `topic_name='${searchInputs.topics}'`
        : '';

    const fetchApiUrl =
      queryParamSearch || queryParamTopic
        ? `blogpostcontent/?${queryParamSearch}&${queryParamTopic}`
        : 'blogpostcontent';

    console.log(fetchApiUrl);

    return requests.get(fetchApiUrl).then(
      response => {
        console.log(response);
        return true;
      },
      error => {
        console.log(error.response.body);
        return false;
      }
    );
  };

  return (
    <Container>
      <BackButton to="/blog">
        <i className="arrow left icon"></i>Blog Home
      </BackButton>

      <Header>
        <h2>Blog Article Search Results</h2>
      </Header>
      <Form size="large">
        <SearchWrapper>
          {/* TODO IN FUTURE: Add in Autocomplete */}
          <SearchFieldWrapper>
            <Form.Field
              id="form-input-control-search-term"
              control={Input}
              placeholder="Search..."
              label="Search"
              name="searchTerm"
              icon="search"
              onKeyPress={handleSubmit}
              type="text"
              onChange={handleInputChange}
              value={searchInputs.searchTerm}
            />
          </SearchFieldWrapper>

          <FilterWrapper>
            <Form.Field
              control={Select}
              options={topicFilterOptions}
              label="Topics"
              placeholder="Topics"
              name="topics"
              onChange={handleInputChange}
              value={searchInputs.topics}
            />
          </FilterWrapper>
        </SearchWrapper>
      </Form>

      {isLoading ? <Spinner /> : <BlogList blogList={searchResults} />}
    </Container>
  );
};

export default BlogSearch;
