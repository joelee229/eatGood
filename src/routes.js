import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Login from './pages/login';
import Main from './pages/Main';
import Histórico from './pages/Historico';
import Configuração from   './pages/Config';
import Informação from './pages/Info';
import Conta from './pages/Conta';
import Termos_de_uso from './pages/Termos';
import Informar_erro from './pages/Informar';
import Camera from './pages/camera';

export default createAppContainer(
    <AppDrawerNavigator/>
);
const AppDrawerNavigator = createDrawerNavigator({
    Login,
    Main,
    Histórico,
    Configuração,
    Informação,
    Conta,
    Termos_de_uso,
    Informar_erro,
    Camera,
})