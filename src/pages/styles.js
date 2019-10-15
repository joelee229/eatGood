import styled from 'styled-components/native';
import {StyleSheet} from "react-native";

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
`;
export const Header = styled.View`
  background: #ab3ec9;
  flex-direction: row;
  ${'' /* margin-vertical: 10px; */}
  padding-left: 5px;
`;

export const Logo = styled.Text`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    margin: 0 0 0 23%;

`;


export const Stats = styled.View`  
    margin-horizontal: 10px;
    margin-vertical: 10px;
    padding: 15px;
    background: #fff;
    border-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 8px;
    margin-bottom: 12px;
    margin-horizontal: 120px;
    background: #ab3ec9;
  
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
`;