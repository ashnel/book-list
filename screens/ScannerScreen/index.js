import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import Widget from '../../assets/widget/index.html';
import styles from './styles';

export default class BarcodeScannerISBN extends React.Component {
  state = {
    isRequestingCameraPermission: true,
    hasCameraPermission: null,
    isbn: null
  };

  componentDidMount() {
    this.addNavigationListeners();
  }

  componentWillUnmount() {
    this.blurSubscription.remove();
    this.focusSubscription.remove();
  }

  addNavigationListeners = () => {
    const { navigation } = this.props;

    this.blurSubscription = navigation.addListener('didBlur', this.resetState);

    this.focusSubscription = navigation.addListener(
      'didFocus',
      this.getCameraPermission
    );
  };

  resetState = () => {
    this.setState({
      isbn: null,
      hasCameraPermission: null,
      isRequestingCameraPermission: true
    });
  };

  getCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      hasCameraPermission: status === 'granted',
      isRequestingCameraPermission: false
    });
  };

  renderBarcodeScanner = () => {
    return (
      <BarCodeScanner
        onBarCodeRead={this._handleBarCodeRead}
        style={StyleSheet.absoluteFill}
      />
    );
  };

  renderBook = () => {
    return <WebView source={Widget} style={styles.webView} />;
  };

  render() {
    const {
      isRequestingCameraPermission,
      hasCameraPermission,
      isbn
    } = this.state;

    if (isRequestingCameraPermission) return <ActivityIndicator />;
    if (!hasCameraPermission) return <Text>No access.</Text>;

    return (
      <View style={{ flex: 1 }}>
        {isbn ? this.renderBook() : this.renderBarcodeScanner()}
      </View>
    );
  }

  _handleBarCodeRead = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // fetch(`https://idreambooks.com/api/books/reviews.json?q=${data}&key=5157f97212fe5ad1cfaba7706185beb054cd388a`)
    // .then(response => {
    //   console.log(response.json());
    //   return response.json();
    // })
    // .then(responseJson => {
    //   this.setState({ data: responseJson });
    // })
    this.setState({ isbn: data });
  };
}
