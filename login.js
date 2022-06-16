import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text,TouchableOpacity } from "react-native";
const sendText= async(phoneNumber)=>{
  console.log("PhoneNumber: ",phoneNumber);
  await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers:{
    'content-type':'application/text'
    }
  });
}
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder = "123-345-1111"
        placeholderTextColor = '#08120D'
      />
      <TouchableOpacity
      style={styles.button}
      onPress={()=>{
        sendText(phoneNumber);}}
    >
      <Text>Phone Number</Text>
    </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor = '#08120D'
        keyboardType="numeric"
        secureTextEntry = {true}
        
      /><TouchableOpacity
      style={styles.button}
      onPress={()=>{
        sendText(phoneNumber);}}
      
    >
      <Text>Login</Text>
    </TouchableOpacity>
    
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:350
    
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10}
});

export default Login; 