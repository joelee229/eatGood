import React, {Component} from 'react';
import {View, StyleSheet, Image, Text,TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class login extends Component {
   
    static navigationOptions = {
        drawerIcon: ({ tintColor}) => (
          <Icon name= 'account-circle' style={{fontSize: 24, color: tintColor}}/>
        )
      }
   
    render(){
     const { navigate } = this.props.navigation;
        return(
            <View style ={styles.container2} >
                    <Icon name='account-circle' size={80} color='#9b18f2'
                        style={{margin:0}}
                    />
                    <StatusBar barStyle = "dark-content" backgroundColor= "#f5f5f5"/>
                    <Text style={styles.logo}>eatGood</Text>
                    <TextInput 
                    autoCapitalize= "none"
                    autoCorrect= {false}
                    placeholder="Digite seu usuário"
                    placeholderTextColor= '#999'
                    style={styles.input}
                    />
                    <TouchableOpacity  style={styles.button} onPress={() => navigate('Home', { name: 'Brent' })}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>

                </View>
        ); 
   }
    
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 30,
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#9b18f2',
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#9b18f2',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

