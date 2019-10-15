import React, {Component} from 'react';
import { Text, ScrollView, StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import {Header, Logo, Stats, Button, ButtonText} from './styles';
import Login from './login';

export default class Main extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor}) => (
          <Icon name= 'home' style={{fontSize: 24, color: tintColor}}/>
        )
      }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <>
                <StatusBar barStyle = "light-content" backgroundColor= "#ab3ec9"/>
                <Header>
                <Icon name = "menu" size = {40} color = "#fff"
                    onPress={() => this.props.navigation.openDrawer()}
                />
                    <Logo>eatGood</Logo>
                </Header>
                <ScrollView style={{flex: 1, backgroundColor:"#8B10AE"}}>
                    <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 25,paddingLeft:5,paddingTop: 5}}>Últimas refeições</Text>
                    <Stats>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 5, paddingLeft: 5   }}>Carboidratos:</Text>
                        <Text style={{color:'#ff0', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>35%   [########------------]</Text>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>Proteínas:</Text>
                        <Text style={{color:'#f00', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>25%   [######---------------]</Text>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>Gorduras:</Text>
                        <Text style={{color:'#f00', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>30%   [#######--------------]</Text>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5   }}>Vitaminas:</Text>
                        <Text style={{color:'#f00', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>10%   [####------------------]</Text>
                        <Icon name = "insert-emoticon" size = {40} color = "#f00" style={{marginLeft:5}}/>
                    </Stats>
                    <Stats>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 5, paddingLeft: 5   }}>Carboidratos:</Text>
                        <Text style={{color:'#0f0', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>30%   [######--------------]</Text>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>Proteínas:</Text>
                        <Text style={{color:'#0f0', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>40%   [#######------------]</Text>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>Gorduras:</Text>
                        <Text style={{color:'#0f0', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>10%   [###------------------]</Text>
                        <Text style={{color:'#000', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5   }}>Vitaminas:</Text>
                        <Text style={{color:'#ff0', fontWeight: 'bold', fontSize: 20,paddingTop: 3, paddingLeft: 5  }}>20%   [#####---------------]</Text>
                        <Icon name = "insert-emoticon" size = {40} color = "#0f0" style={{marginLeft:5, marginTop: 3}}/>
                    </Stats>
                    <Button onPress={() => navigate('Camera', { name: 'Brent' })}>
                        <ButtonText><Icon name='camera-alt' size={30}
                        /> 
                        </ButtonText>
                    </Button>
                    </ScrollView>
            </>
        );
    }
}

