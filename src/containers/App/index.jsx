import React from 'react';
import Header from 'components/Header';

import 'styles/main.styl';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    route: React.PropTypes.object.isRequired
  }

  render() {
    let children = React.cloneElement(this.props.children, {data: this.props.route.data});
    return (
      <div>
        <Header />
        <div className="body-content">
          {children}
        </div>
      </div>
    );
  }
}
