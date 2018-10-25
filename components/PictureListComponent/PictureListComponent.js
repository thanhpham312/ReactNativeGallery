import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback, Image, View, Modal, ActivityIndicator, Alert } from 'react-native';
import PictureListStyle from './PictureListStyle';
import ImageZoom from 'react-native-image-pan-zoom';
import Dimensions from 'Dimensions';


export default class PictureListComponent extends Component {

    constructor() {
        super();

        this.state = {
            searchKeyword: 'landscape',
            todoDataSource: [],
            modalVisible: false,
            currentPictureURI: ''
        }

        this.pressItem = this.pressItem.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.changeSearchKeyword = this.changeSearchKeyword.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    async changeSearchKeyword(keyword) {
        await this.setState({
            searchKeyword: keyword,
        })
        this.fetchPictures();
    }

    fetchPictures() {
        console.log(this.state.searchKeyword)
        fetch("http://pixabay.com/api/?key=10372347-f91eea3b443f6c19e7a9a11b4&q=" + this.state.searchKeyword + "&image_type=photo&per_page=200")
        .then((response) => response.json())
        .then((response) => {
            console.log(response.hits)
            this.setState({
                todoDataSource: response.hits
            })
        })
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount(){
        this.fetchPictures();
    }

    async pressItem(largeImageURL){
        await this.setState({
            currentPictureURI: largeImageURL
        });
        console.log(this.state.currentPictureURI)
        this.setModalVisible(true);
    }

    renderItem({item}) {
        return(
                <TouchableNativeFeedback
                    onPress={()=>{
                        this.pressItem(item.largeImageURL);
                    }}
                    useForeground={true}
                >
                    <View style={PictureListStyle.PictureWrapper}>
                        <Image style={PictureListStyle.PictureThumbnail}
                            source={{
                                uri: item.webformatURL
                            }}
                        />
                        
                    </View>
                </TouchableNativeFeedback>
        )
    }

    render() {
        return (
            <View style={PictureListStyle.PictureListMainView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}>
                    <View style={PictureListStyle.PictureModalWrapper}>
                        <View style={PictureListStyle.PictureModalBackground}>
                            <ActivityIndicator
                                style={PictureListStyle.PictureLargeSctivityIndicator}
                                size="large"
                                color="#1565C0"
                            />
                        </View>
                        <TouchableNativeFeedback
                            onPress={() => {
                                this.setModalVisible(false);
                            }}
                            useForeground={true}
                        >
                            <ImageZoom
                            cropWidth={Dimensions.get('window').width}
                            cropHeight={Dimensions.get('window').height}
                            imageWidth={Dimensions.get('window').width}
                            imageHeight={Dimensions.get('window').height}
                            onClick={() => {
                                this.setModalVisible(false);
                            }}
                            >
                                <Image style={PictureListStyle.PictureLarge}
                                    source={{
                                        uri: this.state.currentPictureURI
                                    }}
                                />
                            </ImageZoom>
                        </TouchableNativeFeedback>
                    </View>
                </Modal>

                <FlatList
                    contentContainerStyle={PictureListStyle.PictureList}
                    data={this.state.todoDataSource}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={this.renderItem}
                    numColumns={3}
                />
            </View>
        )
    }
}