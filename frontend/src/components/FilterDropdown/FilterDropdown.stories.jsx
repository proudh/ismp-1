import React from 'react';
import FilterDropdown from './FilterDropdown';

const sortOptions = [
  {
    key: 'Newest',
    text: 'Newest',
    value: 'Newest'
  },
  {
    key: 'Alphabetical',
    text: 'Alphabetical',
    value: 'Alphabetical'
  }
];

export const Default = () => (
  <FilterDropdown options={sortOptions} label="Sort by" />
);
