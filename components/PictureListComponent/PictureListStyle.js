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
    resizeMode: "cover",
    borderRadius: 10,
    elevation: 5
  },
  PictureModalWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    alignContent: 'center',
  },
  PictureModalBackground: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.8,
    flexDirection: 'column',
    alignContent: 'center',
  },
  PictureLargeSctivityIndicator: {
    flex: 1,
  },
  PictureLarge: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "contain",
  }
});

export default PictureListStyle;