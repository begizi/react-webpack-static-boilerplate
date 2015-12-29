import React from 'react';
import DocumentMeta from 'react-document-meta';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <DocumentMeta title="Webpack Static | About" description="Information about this site." />
        <h1>About</h1>
        <p>This is the about page.</p>
      </div>
    );
  }
}
