import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,Alert } from 'react-native';
import * as firebase from 'firebase'


export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state={
            emailId:"",
            password:""
        }
    }
    Teacherslogin=async(email,password)=>{
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('THomeScreen')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                Alert.alert("user dosen't exists");
                console.log("doesn't exist");
                break;
              case 'auth/invalid-email':
                Alert.alert('incorrect email or password')
                console.log('invaild');
                break;
            }
          }
        }
        else{
            Alert.alert('enter email and password');
        }
      }


    Studentslogin=async(email,password)=>{
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('SHomeScreen')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                Alert.alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                Alert.alert('incorrect email or password')
                console.log('invaild')
                break
            }
          }
        }
        else{
            Alert.alert('enter email and password');
        }
      }

    render(){
        return(
            <View>

            <Image
            source={require("../assets/cyber.png")}
            style={{width:250, height: 200,marginLeft:550,alignItems:'center'}}/>
                      <Text style={{textAlign: 'center', fontSize: 30}}>Cyber-Schools</Text>

                <TextInput
                 style={styles.loginBox}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(text)=>{
                    this.setState({
                        emailId: text
                    })    
                }}
                
                />

                <TextInput
                 style={styles.loginBox}
                    placeholder="Password"
                    secureTextEntry = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            password: text
                        })
                    }}
                />
                <TouchableOpacity style = {styles.button}
                onPress={()=>{this.Studentslogin(this.state.emailId ,this.state.password)}}>
                    <Text style = {styles.buttonText}>Student Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}
                onPress={()=>{this.Teacherslogin(this.state.emailId ,this.state.password)}}>
                    <Text style = {styles.buttonText}>Teacher Login</Text>
                </TouchableOpacity>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        alignSelf: "center",
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "#008B8B",
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
      },
      button: {
        width: 300,
        height: 50,
        marginTop:20,
        marginLeft:530,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#008B8B",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText: {
        color: "#ffff",
        fontWeight: "bold",
        fontSize: 20
      }
});