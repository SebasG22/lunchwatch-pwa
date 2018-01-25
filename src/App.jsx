import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import Store from './stores/Store';
import Theme from './themes/Theme';
import Header from './containers/Header';
import Footer from './containers/Footer';
import MenuWall from './containers/MenuWall';

const App = () => (
  <Provider store={Store}>
    <MuiThemeProvider theme={Theme}>
      <div>
        <Reboot />
        <Header />

        <Router>
          <Switch>
            <Route component={MenuWall} />
          </Switch>
        </Router>

        <Footer />
      </div>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
