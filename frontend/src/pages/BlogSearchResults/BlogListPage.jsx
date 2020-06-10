// import { filter, escapeRegExp, debounce } from 'lodash';
import _ from 'lodash';
import React, { Component, useState, useEffect } from 'react';
import BlogList from 'components/BlogList/BlogList';

import FilterDropdown from 'components/FilterDropdown/FilterDropdown';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mixins from '../../styles/mixins';

import blogListData from './data';

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

//
const categoryFilterOptions = [
  {
    key: 'All',
    text: 'All',
    value: 'All'
  }
];

const resultSortOptions = [
  {
    key: 'Newest',
    text: 'Newest',
    value: 'Newest'
  }
];

const BlogSearch = ({ searchTerm }) => {
  // handleResultSelect = (e, { result }) =>
  //   this.setState({ value: result.title });

  // handleSearchChange = (e, { value }) => {
  //   this.setState({ isLoading: true, value });

  //   setTimeout(() => {
  //     if (this.state.value.length < 1) return this.setState(initialState);

  //     const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
  //     const isMatch = result => re.test(result.title);

  //     this.setState({
  //       isLoading: false,
  //       results: _.filter(this.props.blogListData, isMatch)
  //     });
  //   }, 300);
  // };

  return (
    <div style={{ margin: '2em auto', maxWidth: '1060px' }}>
      <BackButton to="/blog">
        <i className="arrow left icon"></i>Blog Home
      </BackButton>

      {/* <Title>{value ? 'Search Results' : 'All Blog Posts'}</Title> */}

      {/* Add in Autocomplete */}
      {/* <SearchWrapper>
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
          <FilterDropdown
            options={filterOptions}
            label="Filter type"
            marginRight
          />
          <FilterDropdown options={sortOptions} label="Sort by" />
        </FilterWrapper>
      </SearchWrapper> */}

      {/* {value && <Results>Results for ‘{value}’</Results>} */}

      <BlogList blogList={blogListData} />
    </div>
  );
};

export default BlogSearch;
