import React from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import history from './history';
import { PublicRoute } from './routes';
import Homepage from '../containers/pages/homepage';


function PublicRouter() {

  return (
    <>
      <Router history={history}>
        <PublicRoute exact path="/" component={Homepage} />{' '}
        <PublicRoute exact path="/:countries" component={Homepage} />{' '}
      </Router>{' '}
    </>
  );
}

export default PublicRouter;
