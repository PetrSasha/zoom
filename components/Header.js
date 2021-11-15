import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
const Header = () => {
    return (
        <View style={styles.container}>
            <Entypo name="notification" size={30} color="#efefef"/>
            <Text style={styles.text}>Meet & Chat</Text>
            <Entypo name="new-message" size={30} color="#efefef"/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:15,
        paddingVertical:10,
        
    },
    text: {
        textAlign: "center",
        fontSize:20,
        fontWeight: "700",
        color: "#efefef",
    }
})