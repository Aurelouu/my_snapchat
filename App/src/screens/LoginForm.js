import React from 'react';
import { Button , View, TextInput, } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

let logEmail
let logPass

export function updateValues(text,field) {
    if(field == 'email')
    {
        logEmail = text;
    }else if(field == 'password'){
        logPass = text;
    }
}

export function submit() {
    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('@emailValue')
            const pass = await AsyncStorage.getItem('@passValue')
            if(email == logEmail && pass == logPass ) {
                console.log('Connexion réussi !')
            }else console.log('Mauvais identifiant...')
        } catch(e) {
            console.log(e)
        }
    }

    getData()//Lecture des données
}

export const LoginForm = () => {
    return (
        <View>
            <TextInput placeholder ="Your Email" onChangeText={(text => updateValues(text,'email'))}/>
            <TextInput placeholder = "Your Password" onChangeText={(text => updateValues(text,'password'))}/>
            <Button  title='Sign up!' onPress={ submit }/>
        </View>
    )
}
