import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CustomText extends React.Component {

    render(){

        const style=[{fontFamily:'SourceSans'},this.props.style || {}];
        return (
            <Text style={style}>{this.props.children}</Text>
        );
        
    }
}