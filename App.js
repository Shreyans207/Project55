import * as React from 'react';
import { Text, View, Button , TouchableOpacity } from 'react-native';
import {Audio} from "expo-av"

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton1 />
        <br></br>
        <SoundButton2 />
        <br></br>
        <SoundButton3 />
        <br></br>
        <SoundButton4 />
         <br></br>
        <SoundButton5 />
         <br></br>
         <br></br>
         <br></br>

        <StopSound />

      </View>
    );
  }
}

class SoundButton1 extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri : "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
       {shouldPlay : true}
     )
  }
  render() {
    return (
      <TouchableOpacity style = {{backgroundColor : "orange" , 
      marginLeft : 70 , borderWidth : 1 , borderColor : "rgba(125,180,241,0)" , 
      alignItems : "Center" , justifyContent : "Center" , width : 200 , height : 40 , 
      borderRadius : 20}} onPress = {this.playSound}>
      <Text style = {{fontWeight : "bold" , fontSize : 20 , fontStyle : "italic" }}>Play Sound 1</Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton2 extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri : "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
       {shouldPlay : true}
     )
  }
  render() {
    return (
      <TouchableOpacity style = {{backgroundColor : "green" , 
      marginLeft : 70 , borderWidth : 1 , borderColor : "rgba(125,180,241,0)" , 
      alignItems : "Center" , justifyContent : "Center" , width : 200 , height : 40 , 
      borderRadius : 20}} onPress = {this.playSound}>
      <Text style = {{fontWeight : "bold" , fontSize : 20 , fontStyle : "italic" }}>Play Sound 2</Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton3 extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri : "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
       {shouldPlay : true}
     )
  }
  render() {
    return (
      <TouchableOpacity style = {{backgroundColor : "blue" , 
      marginLeft : 70 , borderWidth : 1 , borderColor : "rgba(125,180,241,0)" , 
      alignItems : "Center" , justifyContent : "Center" , width : 200 , height : 40 , 
      borderRadius : 20}} onPress = {this.playSound}>
      <Text style = {{fontWeight : "bold" , fontSize : 20 , fontStyle : "italic" }}>Play Sound 3</Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton4 extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri : "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
       {shouldPlay : true}
     )
  }
  render() {
    return (
      <TouchableOpacity style = {{backgroundColor : "yellow" , 
      marginLeft : 70 , borderWidth : 1 , borderColor : "rgba(125,180,241,0)" , 
      alignItems : "Center" , justifyContent : "Center" , width : 200 , height : 40 , 
      borderRadius : 20}} onPress = {this.playSound}>
      <Text style = {{fontWeight : "bold" , fontSize : 20 , fontStyle : "italic" }}>Play Sound 4 </Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton5 extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri : "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
       {shouldPlay : true}
     )
  }
  render() {
    return (
      <TouchableOpacity style = {{backgroundColor : "purple" , 
      marginLeft : 70 , borderWidth : 1 , borderColor : "rgba(125,180,241,0)" , 
      alignItems : "Center" , justifyContent : "Center" , width : 200 , height : 40 , 
      borderRadius : 20}} onPress = {this.playSound}>
      <Text style = {{fontWeight : "bold" , fontSize : 20 , fontStyle : "italic" }}>Play Sound 5</Text>
      </TouchableOpacity>
    );
  }
}

class StopSound extends React.Component {

  render() {
    return (
      <TouchableOpacity style = {{backgroundColor : "red" , 
      marginLeft : 70 , borderWidth : 1 , borderColor : "rgba(125,180,241,0)" , 
      alignItems : "Center" , justifyContent : "Center" , width : 200 , height : 40 , 
      borderRadius : 20}} 
       onPress={() => {
       Audio.setIsEnabledAsync(false);
   }}>
      <Text style = {{fontWeight : "bold" , fontSize : 20 , fontStyle : "italic" }}>Stop Sound</Text>
      </TouchableOpacity>
    );
  }
}


