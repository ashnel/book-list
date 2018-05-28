import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}