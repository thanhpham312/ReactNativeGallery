import React, { Component } from 'react';
import { View } from 'react-native';
import MainViewStyle from './MainViewStyle';
import PictureListComponent from '../PictureListComponent/PictureListComponent';
import SearchBoxComponent from '../SearchBoxComponent/SearchBoxComponent';


export default class MainViewComponent extends Component {

  constructor() {
    super();

    this.changeSearchKeyword = this.changeSearchKeyword.bind(this);
  }

  changeSearchKeyword(keyword) {
    this.pictureList.changeSearchKeyword(keyword);
  }
  
  static defaultProps = {
  }

  render() {
    return (
      <View
        style={MainViewStyle.MainView}
      >
        <SearchBoxComponent onChangeKeyword={this.changeSearchKeyword}/>
        <PictureListComponent
          ref={instance => { this.pictureList = instance; }}
        />
      </View>
    )
  }
}