import React from 'react';
import { Router } from 'react-router';
import history from './history';
import { PublicRoute } from './routes';
import Homepage from '../containers/homepage';


function PublicRouter() {

  return (
    <>
      <Router history={history}>
        <PublicRoute exact path="/" component={Homepage} />{' '}
        <PublicRoute exact path="/:country" component={Homepage} />{' '}
      </Router>{' '}
    </>
  );
}

export default PublicRouter;
