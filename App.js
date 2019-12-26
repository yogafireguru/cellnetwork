import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import { Provider } from 'react-redux';
import { View,StyleSheet } from 'react-native';
import store from './store';

class App extends React.Component {
render(){

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigation />
      </View>
    </Provider>
     
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;