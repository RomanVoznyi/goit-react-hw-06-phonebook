import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeRedux from './Apps/AppRedux/storeRedux';
import storeReduxToolkit from './Apps/AppReduxToolkit/storeReduxToolkit';

import Navigation from './Components/Navigation';
import App from './Apps/App/App';
import AppRedux from './Apps/AppRedux/AppRedux';
import AppReduxToolkit from './Apps/AppReduxToolkit/AppReduxToolkit';

import { ToastContainer } from 'react-toastify';
import s from './AppMain.module.css';

const AppMain = () => {
  return (
    <div className={s.App}>
      <ToastContainer autoClose={2000} />
      <Navigation />
      <div className={s.counterBox}>
        <Switch>
          <Route path="/redux-toolkit">
            <Provider store={storeReduxToolkit}>
              <AppReduxToolkit />
            </Provider>
          </Route>

          <Route path="/redux">
            <Provider store={storeRedux}>
              <AppRedux />
            </Provider>
          </Route>

          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AppMain;
