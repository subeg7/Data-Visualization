import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component,location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <PublicLayout> //TODO :: create public layout
          <Component {...matchProps} />
        </PublicLayout>
      )}
    />
  );
};

export { PublicRoute };
