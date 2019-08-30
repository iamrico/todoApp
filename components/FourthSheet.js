import React from 'react';
import { StyleSheet, Text, View,Animated, TouchableOpacity, Easing} from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';

export default class FourthSheet extends React.Component {

    state = {
        number:1,
        grow: new Animated.Value(600),
        isExpanded:false
    }
    handleClick = async () =>{

        if(this.state.isExpanded != true){
            Animated.spring(
                this.state.grow,
                {
                    toValue:600,
                    easing:Easing.back()
                }
            ).start()
            await this.setState({isExpanded:true});
        }else{
            Animated.spring(
                this.state.grow,
                {
                    toValue:300,
                    easing:Easing.back()
                }
            ).start() 
            await this.setState({isExpanded:false});
        }
    }


    render(){
        let {grow} = this.state;
        return (
            <Animated.View style={{flex:0,marginTop:-50,borderTopLeftRadius:50,borderTopRightRadius:50,backgroundColor:'red',height:grow}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View><TouchableOpacity onPress={this.handleClick}><CustomText style={{color:'#29335C',marginLeft:40,marginTop:20,fontSize:40}}>Done</CustomText></TouchableOpacity></View>
                    <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                        <View style={{marginTop:25,marginLeft:140}}>
                            <Ionicons name="md-add-circle" size={45} color="#11B5E4" />
                        </View>
                    </View>
                </View>
                
            </Animated.View>
        );
        
    }
}