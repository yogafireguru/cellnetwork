import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
import { WebView } from 'react-native-webview';


export default class WatchVideo extends Component {

  render() {
    const { navigation } = this.props;

    return (

     <View style={styles.Container}>
      <WebView
        source={{ uri: 'https://www.youtube.com/embed/'+navigation.getParam('video_url', 'rrikyi5c0Xk') }}
        javaScriptEnabled={true}
        domStorageEnabled={true}   
        startInLoadingState={true}
      />
    </View>
        
    );
  }
}

const styles = StyleSheet.create({
    Container: {
      flex: 1
    },
    WebViewStyle: {
      marginTop: 20
    }
  });