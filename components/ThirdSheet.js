import React from 'react';
import { StyleSheet, Text, View,Animated, TouchableOpacity, Easing, FlatList} from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Divider } from 'react-native-elements';

export default class ThirdSheet extends React.Component {

    state = {
        number:1,
        grow: new Animated.Value(-300),
        isExpanded:false,
        listGrow: new Animated.Value(-100)
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
            Animated.spring(
                this.state.listGrow,
                {
                    toValue:-500,
                    easing:Easing.back()
                }
            ).start()
            await this.setState({isExpanded:true});
        }else{
            Animated.spring(
                this.state.grow,
                {
                    toValue:-300,
                    easing:Easing.back()
                }
            ).start() 
            Animated.spring(
                this.state.listGrow,
                {
                    toValue:-100,
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
            Animated.spring(
                this.state.listGrow,
                {
                    toValue:-500,
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
                    toValue:-300,
                    easing:Easing.back()
                }
            ).start() 
            Animated.spring(
                this.state.listGrow,
                {
                    toValue:-100,
                    easing:Easing.back()
                }
            ).start()
            this.setState({isExpanded:false});
        }
    }

    render(){
        let {grow,listGrow} = this.state;
        let listHeight = grow+10; 
        return (
            <GestureRecognizer
                onSwipeUp={this.onSwipeUp}
                onSwipeDown = {this.onSwipeDown}
            >
                <Animated.View style={{flex:2,marginTop:grow,borderTopLeftRadius:50,borderTopRightRadius:50,backgroundColor:'white'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View><TouchableOpacity onPress={this.handleClick}><CustomText style={{color:'#29335C',marginLeft:40,marginTop:20,fontSize:40}}>Done</CustomText></TouchableOpacity></View>
                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                            <View style={{marginTop:25,marginLeft:140}}>
                                <Ionicons name="md-add-circle" size={45} color="#11B5E4" />
                            </View>
                        </View>
                    </View>
                    <Animated.FlatList
                                style={{flex:1,marginLeft:50,marginTop:listGrow}}
                                data={[
                                    {key: 'Devin',priority:'High',action:'Do Something'},
                                    {key: 'Dan',priority:'Low',action:'Buy Groceries'},
                                    {key: 'Dominic',priority:'Medium',action:'Get Lunch with Regine'},
                                    {key: 'Jackson',priority:'High',action:'Exercise'},
                                    {key: 'James',priority:'Low',action:'Buy Milk'},
                                    {key: 'Joel',priority:'Medium',action:'Pay Bills'},
                                    {key: 'John',priority:'Low',action:'Get Money'},
                                    {key: 'Jillian',priority:'High',action:'Study'},
                                    {key: 'Jimmy',priority:'Medium',action:'Eat'},
                                    {key: 'Julie',priority:'High',action:'Eat some more'},
                                ]}
                                renderItem={({item}) =>
                                        <View >
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <CustomText style={{color:'#29335C',fontSize:20,paddingBottom:20,paddingTop:20}}>{item.action}</CustomText>
                                                </View>
                                                {
                                                    item.priority == 'Low'?  
                                                    <View style={{flex:1,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                                                    <View style={{backgroundColor:'#B7F0AD', paddingLeft:5,paddingRight:5,borderRadius:4}}><CustomText style={{color:'#20BF55'}}>{item.priority}</CustomText></View>
                                                                    </View> :null
                                                
                                                }
                                                {
                                                    item.priority == 'Medium'?  
                                                    <View style={{flex:1,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                                                    <View style={{backgroundColor:'#F2A541', paddingLeft:5,paddingRight:5,borderRadius:4}}><CustomText style={{color:'#FF5714'}}>{item.priority}</CustomText></View>
                                                                    </View> : null
                                                
                                                }
                                                {
                                                    item.priority == 'High'?  
                                                    <View style={{flex:1,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                                                    <View style={{backgroundColor:'#FF9B71', paddingLeft:5,paddingRight:5,borderRadius:4}} ><CustomText style={{color:'#FD151B'}}>{item.priority}</CustomText></View>
                                                                    </View> : null
                                                
                                                }
                                                
                                            </View>
                                            <View style={{width:'85%',backgroundColor:'#D0CEBA',height:2}}></View>
                                        </View>
                                }
                    />
                </Animated.View>
            </GestureRecognizer>
        );
        
    }
}