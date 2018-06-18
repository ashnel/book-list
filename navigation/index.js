import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ScannerScreen from "../screens/ScannerScreen";

export default createBottomTabNavigator({
  "Reading List": HomeScreen,
  "Read Reviews": ScannerScreen
});
