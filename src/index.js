import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Router} from 'react-router';
import Routes from './routes';
import Html from 'containers/Html';

import 'styles/master.styl';

//Client Only Code
if (typeof document !== 'undefined') {
  let createBrowserHistory = require('history/lib/createBrowserHistory');
  let browserHistory = createBrowserHistory();

  ReactDOM.render(<Router history={browserHistory}>{Routes}</Router>, document.getElementById('content'));
}

//Webpack only Generator code
export default function render(locals, callback) {
  // Retrieve metadata as React components to be rendered inside <head></head>
  let DocumentMeta = require('react-document-meta');
  let meta = DocumentMeta.renderAsReact();

  // Render app to string to be manually inserted into the dom
  let createMemoryHistory = require('history/lib/createMemoryHistory');
  let memoryHistory = createMemoryHistory(locals.path);
  let appHtml = {
    __html: ReactDOMServer.renderToString(<Router history={memoryHistory}>{Routes}</Router>)
  };

  let html = ReactDOMServer.renderToStaticMarkup(<Html meta={meta} appHtml={appHtml} />);
  callback(null, '<!DOCTYPE html>' + html);
}
