import React from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import history from './history';
import { PublicRoute} from './routes';
import Homepage from '../containers/homepage';
import Datapage from '../containers/dataPage';
import BarChart from '../components/BarChart';


function PublicRouter() {
  
  return (
    <>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={Homepage} />{' '}
          <PublicRoute exact path="/data" component={Datapage} />{' '}
          <PublicRoute exact path="/bar" component={BarChart} />{' '}
        </Switch>{' '}
      </Router>{' '}
    </>
  );
}

export default PublicRouter;
