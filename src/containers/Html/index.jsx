/* eslint-disable react/no-danger */
// Used for static site generation only. Never runs on client.
import React from 'react';

export default class Html extends React.Component {
  static propTypes = {
    appHtml: React.PropTypes.object.isRequired,
    meta: React.PropTypes.any
  }

  render() {
    let {meta, appHtml} = this.props;
    return (
      <html lang="en">
        <head>
          {meta}
          <link rel="stylesheet" href="/main.css" />
        </head>
        <body className="home">
          <div id="content" dangerouslySetInnerHTML={appHtml} />
          <script type="text/javascript" src="/app.js" charSet="utf-8"></script>
        </body>
      </html>
    );
  }
}
