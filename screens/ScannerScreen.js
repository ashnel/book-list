import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { WebView } from 'react-native';


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
    console.log('hello')
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // fetch(`https://idreambooks.com/api/books/reviews.json?q=${data}&key=5157f97212fe5ad1cfaba7706185beb054cd388a`)
    // .then(response => {
    //   console.log(response.json());
    //   return response.json();
    // })
    // .then(responseJson => {
    //   this.setState({ data: responseJson });
    // })
  }
}