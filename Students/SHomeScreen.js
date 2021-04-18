import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class SHomeScreen extends React.Component {

  constructor(){
    super()
    this.state={
      allSubjects:[],
      userId: firebase.auth().currentUser.email

    }
    this.subjectRef=null;
  }

  getSubjects=()=>{
    this.subjectRef = db.collection("students").where('email_id' ,'==', this.state.userId)
    .onSnapshot((snapshot)=>{
      var allSubjects=[]
      snapshot.docs.map((doc)=>{
        var subject=doc.data()
        allSubjects.push(subject)
      });
      this.setState({
        allSubjects:allSubjects
      })
    });
  }

  componentDidMount(){
    this.getSubjects()
  }

  componentWillUnmount(){
    this.subjectRef();
  }

    render(){
        return(
            <View>
                
                <Image
                        source={require("../assets/cyber.png")}
                        style={{width:250, height: 200,marginLeft:405,alignItems:'center'}}/>
                <Text style={{textAlign: 'center', fontSize: 30}}>Cyber-Schools</Text>

                {
                  this.state.allSubjects.map((item)=>{
                    <TouchableOpacity style={styles.button}><Text style = {styles.buttonText}>{item}</Text></TouchableOpacity>
                  
                  })
                }


{/*                 <TouchableOpacity style={styles.button}><Text style = {styles.buttonText}>Subjects</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style = {styles.buttonText}>Queries</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style = {styles.buttonText}>Home Work</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style = {styles.buttonText}>Settings</Text></TouchableOpacity>
 */}


            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        width: 1350,
        height: 50,
        marginTop:20,
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
})