import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import SearchBoxStyle from './SearchBoxStyle';


export default class SearchBoxComponent extends Component {

  constructor() {
    super();

  }
  
  static defaultProps = {
  }

  render() {
    return (
      <View
        style={SearchBoxStyle.SearchBoxMainView}
      >
        <TextInput
            style={SearchBoxStyle.SearchBoxTextInput}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Search for images...'
            onSubmitEditing={(event) => {
              this.props.onChangeKeyword(event.nativeEvent.text)
            }}
        ></TextInput>
      </View>
    )
  }
}