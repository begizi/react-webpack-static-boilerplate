import React from 'react';
import { Link, IndexLink } from 'react-router';

export default () => {
  return (
    <nav>
      <IndexLink to="/">Home</IndexLink>
      <Link to="/about">About</Link>
    </nav>
  );
};
