import React from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import history from './history';
import { PublicRoute} from './routes';
import Homepage from '../containers/homepage';


function PublicRouter() {
  
  return (
    <>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={Homepage} />{' '}
        </Switch>{' '}
      </Router>{' '}
    </>
  );
}

export default PublicRouter;
