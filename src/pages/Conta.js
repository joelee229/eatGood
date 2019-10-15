import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Config extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor}) => (
          <Icon name= 'account-box' style={{fontSize: 24, color: tintColor}}/>
        )
      } 
    render(){
        return (
            <View/>  
       );
    }
    
    
}
