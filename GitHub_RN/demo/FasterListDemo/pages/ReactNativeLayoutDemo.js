/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeLayoutDemo extends Component {
  componentDidMount(){
    console.log("");
    this.test();
  }
  test(){
    console.log("test");
  }
  render() {
    return (
      <View>
        {/*Width&Height*/}
        <View style={{width:100,height:100,marginTop:30,backgroundColor:'gray'}}>
          <Text style={{fontSize:16}}>尺寸</Text>
        </View>

        {/*横轴和竖轴*/}
        <View style={{flexDirection:'row',height:40,borderBottomWidth:1,borderColor:'blue'}}>
          <View style={{flex:1,backgroundColor:"red",margin:5}}>
            <Text style={{fontSize:16}}>flex:1</Text>
          </View>
          <View style={{flex:2,backgroundColor:"red",margin:5}}>
            <Text style={{fontSize:16}}>flex:2</Text>
          </View>
          <View style={{flex:3,backgroundColor:"red",margin:5}}>
            <Text style={{fontSize:16}}>flex:3</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});