import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback, Image, View, Modal } from 'react-native';
import PictureListStyle from './PictureListStyle';


export default class PictureListComponent extends Component {

    constructor() {
        super();

        this.state = {
            searchKeyword: 'dog',
            todoDataSource: []
        }

        this.pressItem = this.pressItem.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.changeSearchKeyword = this.changeSearchKeyword.bind(this);
    }

    async changeSearchKeyword(keyword) {
        await this.setState({
            searchKeyword: keyword
        })
        this.fetchPictures();
    }

    fetchPictures() {
        console.log(this.state.searchKeyword)
        fetch("http://pixabay.com/api/?key=10372347-f91eea3b443f6c19e7a9a11b4&q=" + this.state.searchKeyword + "&image_type=photo&per_page=50")
        .then((response) => response.json())
        .then((response) => {
            console.log(response.hits)
            this.setState({
                todoDataSource: response.hits
            })
        })
    }

    componentDidMount(){
        this.fetchPictures();
    }

    pressItem(itemID){
        console.log('Row number ' + itemID);
    }

    renderItem({item}) {
        return(
                <TouchableNativeFeedback
                    onPress={()=>{
                        this.pressItem(item.id);
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