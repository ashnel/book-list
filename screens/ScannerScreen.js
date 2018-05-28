import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerISBN extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    var hello = `https://www.goodreads.com/book/isbn/${data}?callback=data&format=json&user_id=82239334`;
    var scriptTag = "https://www.goodreads.com/book/isbn/0441172717?callback=myCallback&format=json&user_id=82239334";
    fetch("https://www.goodreads.com/book/isbn/0441172717?callback=myCallback&format=json&user_id=82239334")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(responseJson => {
      this.setState({ data: responseJson });
    })
  }
}