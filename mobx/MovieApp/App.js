import React, {Component} from 'react';

import Router from './src/Router';
import NavigationService from './src/NavigationService';

// mobx store
import store from './src/store';
import {Provider} from 'mobx-react';

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
