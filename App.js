import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Scanner from './screens/ScannerScreen';
import {WebView} from 'react-native';
import Widget from './assets/widget/index.html'

class HomeScreen extends React.Component {
  // render() {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Home!!</Text>
  //     </View>
  //   );
  // }
  render()
  {
    return (
      <WebView 
      source={Widget} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Scanner />
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});