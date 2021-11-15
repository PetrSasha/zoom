import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto"
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Fontisto name="search" size={20} color={"#858585"}/>
            <Text style={styles.textSearchBar}>Search...</Text>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    textSearchBar: {
        paddingLeft:10,
        color: "#858585",
    },
    container: {
        backgroundColor:"#333333",
        flexDirection:"row",
        alignItems: "center",
        borderRadius:20,
        paddingVertical:10,
        paddingHorizontal:15,
        marginVertical:15,
        marginHorizontal:10,
    }
})