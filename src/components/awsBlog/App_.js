import React from 'react';

import {Amplify} from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { makeStyles } from '@material-ui/core/styles';
import {Router} from './components/Router'
Amplify.configure(awsmobile);

const App = ()  => {
      const classes = useStyles();
  return (
      <div className={classes.root}>
      <Router />
      </div>
  );
}

export default withAuthenticator(App);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));
