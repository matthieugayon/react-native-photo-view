import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class PhotoView extends Component {
    setScale(scale) {
        this.refs.ScrollView.setNativeProps({
            zoomScale : scale
        });
    }
    render() {
        return (
            <ScrollView
                ref='ScrollView'
                contentContainerStyle={{ alignItems:'center', justifyContent:'center' }}
                centerContent={true}
                zoomScale={this.props.scale}
                maximumZoomScale={this.props.maximumZoomScale}
                minimumZoomScale={this.props.minimumZoomScale}
                showsHorizontalScrollIndicator={this.props.showsHorizontalScrollIndicator}
                showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}>

                <TouchableWithoutFeedback
                    onPress={this.props.onTap ? this.props.onTap : function() {}}>

                    <Image {...this.props}/>

                </TouchableWithoutFeedback>

            </ScrollView>
        );
    }
}
