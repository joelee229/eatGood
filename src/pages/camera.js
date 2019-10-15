import React, {Component} from 'react';
import { RNCamera } from 'react-native-camera';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class camera extends Component{
    takePicture = async () => {
            if (this.camera) {
              const options = { quality: 0.5, base64: true };
              const data = await this.camera.takePictureAsync(options)
              alert(data.uri);
            }
          }


          static navigationOptions = {
            drawerIcon: ({ tintColor}) => (
              <Icon name= 'camera-alt' style={{fontSize: 24, color: tintColor}}/>
            )
          }      
    render(){
        
        return(
            <>
                <RNCamera
                    ref={camera => { this.camera = camera }}
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                /> 
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
                    <Icon name='camera-alt' size={30} color='#000'/>
                </TouchableOpacity>
                </View>
        </>
        );
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        height: 120,
       
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview:{
        flex: 1,
    },
    capture: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    }
});