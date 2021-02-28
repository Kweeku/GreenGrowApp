import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class DrawerImage extends Component {
   constructor(props) {
       super(props);
       this.state = {
           images: [
               {src: '../shared/Images/drawerImage.jpg'}
           ]
       }
   }
    render () {
        return (
            <View>
                {images}
            </View>
        );
    }
};


