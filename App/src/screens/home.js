import {Image, StyleSheet, View} from "react-native";
import {Button} from "react-native-elements";
import React from "react";

export const home = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.iconContainer }>
                <Image
                    style={ styles.icon }
                    source={ require('../assets/img/ghost.png') }
                />
            </View>

            <View style={ styles.button }>
                <Button title="Connexion"
                        titleStyle={{ color: 'black', fontWeight: 'bold' }}
                        buttonStyle={{ backgroundColor: 'white', borderRadius:50, padding:15 }}
                        onPress={() => navigation.navigate('Login')}
                />
                <Button title="Inscription"
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        buttonStyle={{ borderRadius:50, padding:15 }}
                        onPress={() => navigation.navigate('Register')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#FFFC00',
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        marginTop : 300
    },
    icon: {
        height : 100,
        width: 100
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 80,
        marginTop : 250
    }
})