import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {  createAppContainer,  } from "react-navigation";
import redux from './configs/redux';
import { View } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';
const AppContainer = createAppContainer(AppNavigator);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={redux.store}>
        <AppContainer />
      </Provider>
    );
}
}