import React from 'react';
import LoginScreen from './Screens/LoginScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import THomeScreen from "./Teachers/THomeScreen";
import SHomeScreen from "./Students/SHomeScreen";

export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
        //<SHomeScreen/>
    );
  }
}

var switchNavigator=createSwitchNavigator({
LoginScreen: {screen: LoginScreen},
THomeScreen:{screen:THomeScreen},
SHomeScreen:{screen:SHomeScreen}
})
const AppContainer=createAppContainer(switchNavigator);

