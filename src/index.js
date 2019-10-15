
import React from 'react';
import {View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import Login from './pages/login';
import Main from './pages/Main';
import Histórico from './pages/Historico';
import Configuração from   './pages/Config';
import Informação from './pages/Info';
import Conta from './pages/Conta';
import Termos_de_uso from './pages/Termos';
import Informar_erro from './pages/Informar';
import Camera from './pages/camera';

export default class App extends React.Component {
  
  render(){
    return(
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white', alignItems:'center',justifyContent: 'center'}}>
      <Image source={require('./assets/salad.png')} style={{height: 120, width: 120, borderRadius: 60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Login: Login,
  Home: Main,
  Histórico: Histórico,
  Configuração: Configuração,
  Informação: Informação,
  Conta: Conta,
  Termos_de_uso: Termos_de_uso,
  Informar_erro: Informar_erro,
  Camera: Camera,
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
  
  }
  
})

