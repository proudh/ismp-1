import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import BlogList from 'components/BlogList/BlogList';
import FilterDropdown from 'components/FilterDropdown/FilterDropdown';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mixins from '../../styles/mixins';

export const blogTestData = [
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=first',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=second',
    title: 'Adjusting to the U.S.',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=third',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  }
];

const SearchWrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
`;

const Results = styled.div`
  margin: 8px 30px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 60px;
`;

const BackButton = styled(Link)`
  margin: 30px 0 0 30px;
  width: fit-content;
  ${mixins.link}
`;

const FilterWrapper = styled.div`
  display: flex;
`;

const initialState = { isLoading: false, results: [], value: '' };

const filterOptions = [
  {
    key: 'All',
    text: 'All',
    value: 'All'
  }
];

const sortOptions = [
  {
    key: 'Newest',
    text: 'Newest',
    value: 'Newest'
  }
];

export default class BlogSearch extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.blogListData, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    const { blogListData } = this.props;

    return (
      <div style={{ margin: '2em auto', maxWidth: '1060px' }}>
        <BackButton to="/blog">
          <i class="arrow left icon"></i>Blog Home
        </BackButton>

        <Title>{value ? 'Search Results' : 'All Blog Posts'}</Title>

        <SearchWrapper>
          <Search
            size="small"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            value={value}
            showNoResults={!isLoading && value && results.length === 0}
            input={{
              input: {
                placeHolder: 'Search within topic',
                tabIndex: 0,
                autoComplete: 'off',
                class: 'prompt'
              }
            }}
            {...this.props}
          />

          <FilterWrapper>
            {/* TODO: Add function for filtering and sorting blog list */}
            <FilterDropdown
              options={filterOptions}
              label="Filter type"
              marginRight
            />
            <FilterDropdown options={sortOptions} label="Sort by" />
          </FilterWrapper>
        </SearchWrapper>

        {value && <Results>Results for ‘{value}’</Results>}

        <BlogList data={value ? results : blogListData} />
      </div>
    );
  }
}
