import * as React from 'react';
import {Text,View,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import logo from './Capture.PNG';
import logo1 from './LetterA.png'
import db from './localdb';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text:"",
      displayText:"",
      letter:[],
      image:[]
    }
    
  }
  render(){
    return(
      <View style={styles.container}>
      <Header
      backgroundColor={'gold'}
      centerComponent={{text:'Sign Language App',style:{color:'white',fontSize:20},
      }}/>
      
        <Image source={logo} style={{ width: 100, marginLeft: 110, height:80  }} />

      <TextInput
      style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({text:text});
      }}
      value={this.state.text}/>
          <TouchableOpacity style={styles.goButton}
            onPress={()=>{
//<Image source={logo1} style={{ width: 100, marginLeft: 110, height:80  }} />

}}>

<Text style={styles.buttonText}> GO</Text>
</TouchableOpacity>
        <View>
          {this.state.letter.map((item, index) => {
            return (
              <Image
                letter={this.state.letter[index]}
             source={logo1} style={{ width: 100, marginLeft: 110, height:80  }}
                buttonIndex={index}
              />
            );
          })}
      </View>
    
</View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightblue'
  },
  inputBox:{
     marginTop: 50,
    width: '30%',
    alignSelf: 'center',
    height: 80,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    fontSize:80
  },
  goButton:{
    width: 70,
    height: 60,
    alignSelf: 'center',
    padding: 20,
    margin: 30
  },
buttonText:{
  textAlign:'center',
  fontSize: 20,
fontWeight: 'bold'
},
displayText:{
  fontSize: 20,
  textAlign: 'center'
},
imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }
})