import React from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import history from './history';
import { PublicRoute} from './routes';
import Homepage from '../containers/homepage';
import Datapage from '../containers/dataPage';


function PublicRouter() {
  
  return (
    <>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={Homepage} />{' '}
          <PublicRoute exact path="/data" component={Datapage} />{' '}
        </Switch>{' '}
      </Router>{' '}
    </>
  );
}

export default PublicRouter;
