import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Animated,Easing } from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class SecondSheet extends React.Component {

    state = {
        number:1,
        grow: new Animated.Value(-500),
        isExpanded:false
    }
    handleClick = async () =>{

        if(this.state.isExpanded != true){
            Animated.spring(
                this.state.grow,
                {
                    toValue:-700,
                    easing:Easing.back()
                }
            ).start()
            await this.setState({isExpanded:true});
        }else{
            Animated.spring(
                this.state.grow,
                {
                    toValue:-500,
                    easing:Easing.back()
                }
            ).start() 
            await this.setState({isExpanded:false});
        }
    }

    onSwipeUp = () => {
        if(this.state.isExpanded != true){
            Animated.spring(
                this.state.grow,
                {
                    toValue:-700,
                    easing:Easing.back()
                }
            ).start()
            this.setState({isExpanded:true});
        }
    }

    onSwipeDown = () =>{
        if(this.state.isExpanded == true){
            Animated.spring(
                this.state.grow,
                {
                    toValue:-500,
                    easing:Easing.back()
                }
            ).start() 
            this.setState({isExpanded:false});
        }
    }

    render(){
    
        let {grow} = this.state;
        return (
            <GestureRecognizer
                onSwipeUp={this.onSwipeUp}
                onSwipeDown={this.onSwipeDown}
            >
                <Animated.View style={{flex:2,marginTop:grow,borderTopLeftRadius:50,borderTopRightRadius:50,backgroundColor:'#FFDD4A'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View><TouchableOpacity onPress={this.handleClick}><CustomText style={{color:'#29335C',marginLeft:40,marginTop:20,fontSize:40}}>Doing</CustomText></TouchableOpacity></View>
                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                            <View style={{marginTop:25,marginLeft:140}}>
                                    <Ionicons name="md-add-circle" size={45} color="white" />
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </GestureRecognizer>
            
        );
        
    }
}