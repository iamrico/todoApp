import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class BackButtonArea extends React.Component {

    render(){

        return(
            <View style={{flex:.5, backgroundColor:'#29335C'}}>
                <Text style={{color:'white',marginLeft:40,marginTop:30}}><Ionicons name="md-arrow-back" size={32} color="white" /></Text>
            </View>
        );
        
    }
}