import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View,Text,Button,TextInput,StyleSheet} from "react-native";

const Register = () => {
    return(
        <View>
            <Text style={styles.text}>Register {"\n"}</Text>
            <TextInput style={styles.name}>Full Name</TextInput>
            <TextInput style={styles.name}>Email</TextInput>
            <TextInput style={styles.name}>Mobile number</TextInput>
            <TextInput style={styles.name}>Password</TextInput>
            <Button title="Register"
            style={styles.button} 
            />
            <Text>{"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} </Text>
            <Text style={{textAlign:"center"}}>Already have an account? Login here.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight:"800",
        marginTop:30,
        marginLeft:20
      },
    name:{
        marginTop:12,
        marginLeft:20,
        borderWidth: 2, 
        height: 35, 
        borderRadius:12
    },
    button: {
        backgroundColor: "blue",
        width: "40%",
        height: 40,
      },
})

export default Register;