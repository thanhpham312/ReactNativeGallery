import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dimensions from 'Dimensions';
import MainViewComponent from './components/MainViewComponent/MainViewComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.MainView}>
        <MainViewComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'column',
    alignContent: 'center',
    paddingTop: Dimensions.get('window').height*0.04
  },
});
