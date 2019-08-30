import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';

export default class FirstSheet extends React.Component {

    render(){
        return (
            <View style={{flex:1, backgroundColor:'#29335C',marginTop:-200,flexDirection:'row'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View>
                        <CustomText style={{color:'white',marginLeft:40,fontSize:50}}>Rico</CustomText>
                    </View>
                    <View>
                        <Ionicons style={{color:'white',marginLeft:215,marginTop:15}} name="md-more" size={45} color="white" />
                    </View>
                </View>
                
            </View>
        );
        
    }
}