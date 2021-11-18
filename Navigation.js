import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import MeetingRoom from './screens/MeetingRoom'
import {io} from "socket.io-client"

const Navigation = () => {
    const Stack = createStackNavigator()
    const io = require('socket.io-client')
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen
                    name="Home" component={Home} options={{headerShown:false}}
                />
                <Stack.Screen
                    name="MeetingRoom" component={MeetingRoom} options={
                        {
                            title:"Start a Meeting",
                            headerStyle:
                            {
                                backgroundColor:"#1c1c1c",
                                shadowOpacity:0
                            },
                            headerTintColor:"white"
                        }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
