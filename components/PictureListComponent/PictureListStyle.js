import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const PictureListStyle = StyleSheet.create({
  PictureListMainView: {
    flex: 11
  },
  PictureList: {
    flexDirection: 'column',
  },
  PictureWrapper: {
    padding: 3,
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
  },
  PictureThumbnail: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "stretch",
    borderRadius: 10,
  }
});

export default PictureListStyle;