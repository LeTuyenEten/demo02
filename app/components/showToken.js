import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions,Text  } from 'react-native';
import { connect } from 'react-redux';


@connect(
  state => ({
    login: state.loginReducer, 
  })
)
export default class Footer extends Component {
   
  render() {
    return (
        <View >
            <Text>{`${this.props.login.isLoading}` || 'Loading'}</Text>
            <Text>{this.props.login.refreshToken || 'refreshToken'}</Text>
            <Text>{this.props.login.accessToken || 'accessToken'}</Text>
        </View>
    );
  }
}
