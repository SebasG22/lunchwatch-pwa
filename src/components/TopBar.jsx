import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Theme from '../themes/Theme';
import LanguageSelector from './LanguageSelector';

const styles = {
  root: {
    width: '100%',
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbar: {
    color: Theme.palette.types.dark.text.primary,
  },
  logo: {
    flex: 1,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: 16,
  },
  language: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  button: {
    color: Theme.palette.types.dark.text.primary,
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      background: 'transparent',
      color: Theme.palette.types.dark.text.secondary,
    },
    '& .label': {
      marginLeft: 5,
    },
  },
};

const TopBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <Typography type="title" color="inherit">
            <span role="img" aria-label="watch">🕑</span> LunchWatch
          </Typography>
        </div>
        <div className={classes.language}>
          <LanguageSelector />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
