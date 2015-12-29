import React from 'react';
import DocumentMeta from 'react-document-meta';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <DocumentMeta title="Webpack Static | Home" description="Information about this site." />
        <h1>Hello world!</h1>
        <p>This is the home page.</p>
      </div>
    );
  }
}
