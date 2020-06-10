import React from 'react';
import { WebinarHighlight } from './WebinarHighlight';

export default {
  component: WebinarHighlight,
  title: 'WebinarHighlight',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <WebinarHighlight />;
