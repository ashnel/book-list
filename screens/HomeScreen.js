import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{JSON.stringify(this.props.navigation.state)}</Text>
      </View>
    );
  }
  // Comment the above render and uncomment the below render to view example page of reviews
  // render()
  // {
  //   return (
  //     <WebView
  //     source={Widget} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  //   )
  // }
}

export default HomeScreen;
