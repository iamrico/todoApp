import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import FirstSheet from './components/FirstSheet';
import SecondSheet from './components/SecondSheet';
import ThirdSheet from './components/ThirdSheet';
import BackButtonArea from './components/BackButtonArea';
import {Font} from "expo";
import FourthSheet from './components/FourthSheet';
export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      fontLoaded:false
    }

  }

  async componentDidMount(){
    await Font.loadAsync({
      'SourceSans':require('./assets/fonts/SourceSansPro-Black.ttf'),
    })
    
    await this.setState({fontLoaded:true});
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#29335C',}}>
        {this.state.fontLoaded ? 
          <React.Fragment>
            <BackButtonArea/>
            <FirstSheet/>
            <SecondSheet/>
            <ThirdSheet/>
            {/* <FourthSheet/> */}
          </React.Fragment>
          
          :
          <ActivityIndicator size='large'/>  
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
