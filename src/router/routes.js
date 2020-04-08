import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component,location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
          <Component {...matchProps} />
      )}
    />
  );
};

export { PublicRoute };
