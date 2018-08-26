import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReduxDemo from '../components/ReduxDemo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxDemo />
      </Provider>
    );
  }
}

export default App;
