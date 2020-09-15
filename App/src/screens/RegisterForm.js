import React, {Component} from 'react';
import { Button , View, Text, TextInput, } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

let email;
let password;

export function updateValues(text,field) {
    if(field == 'email')
    {
        email = text;
    }else if(field == 'password'){
        password = text;
    }
}

export function submit() { //Save l'user dans un JSON grace à l'api Async Storage
    const emailData = async (value) => {
        try {
            await AsyncStorage.setItem('@emailValue', value)
        } catch (e) {
            console.log(e)//Affiche une erreur si ça n'enregistre pas
        }
    }
    const passData = async (value) => {
        try {
            await AsyncStorage.setItem('@passValue', value)
        } catch (e) {
            console.log(e)//Affiche une erreur si ça n'enregistre pas
        }
    }
    emailData(email)
    passData(password)
}

export const RegisterForm = () => {

    return (
        <View>
            <Text> Adress email </Text>
            <TextInput placeholder ="Your Email" onChangeText={(text => updateValues(text,'email'))}/>
            <Text> Password </Text>
            <TextInput placeholder = "Your Password" onChangeText={(text => updateValues(text,'password'))}/>
            <Text> Confirm Password </Text>
            <TextInput placeholder = "Your Confirm Password"/>
            <Button  title="Sign up!" onPress={ submit }/>
        </View>
    )
}



