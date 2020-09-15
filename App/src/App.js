import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { home } from './screens/home'
import { LoginForm } from './screens/LoginForm'
import { RegisterForm } from './screens/RegisterForm'
import { HomeSnap } from './screens/HomeSnap'

const Home = createStackNavigator()

export default function App() {
    return (

        <NavigationContainer>
            <Home.Navigator>
                <Home.Screen name="Home" component={home} options={{headerShown: false}} />
                <Home.Screen name="Login" component={LoginForm} />
                <Home.Screen name="Register" component={RegisterForm} />
                <Home.Screen name="HomeSnap" component={HomeSnap} />
            </Home.Navigator>

        </NavigationContainer>
  )
}
