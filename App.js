import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Load from './src/components/Load';
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
       <Load/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
