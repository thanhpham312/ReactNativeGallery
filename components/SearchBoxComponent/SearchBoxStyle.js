import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const SearchBoxStyle = StyleSheet.create({
  SearchBoxMainView: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 3,
    paddingRight: 3,
    flexDirection: 'column',
    alignContent: 'center',
  },
  SearchBoxTextInput: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    elevation: 1,
    borderRadius: 25
  }
});

export default SearchBoxStyle;