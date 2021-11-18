
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"


const items = [
    {
        id:1,
        name:"video-camera",
        title:"New Meeting",
        colorCustom:"blue"
    },
    {
        id:2,
        name:"plus",
        title:"join",
        
       
    },
    {
        id:3,
        name:"calendar",
        title:" Schedule",
        
    },
    {
        id:4,
        name:"upload",
        title:" Share Screen",
        
    },

]
const MenuButtons = ({navigation}) => {

    const openMeeting = () => {
        navigation.navigate("MeetingRoom")
    }

    return (
        <View style={styles.container}>
        {items.map((item, index) => 
            <View
            key={index} 
            style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={()=>openMeeting()}
                style={{...styles.button,backgroundColor:item.colorCustom ? item.colorCustom : "#F4A460"}}>
                    <FontAwesome name={item.name} size={23} color={"#efefef"}/>
                </TouchableOpacity>
                <Text style={styles.textMenu}>
                   {item.title}
                </Text>
            </View>
        )}
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: { 
        marginTop:25,
        paddingBottom:10,
        borderBottomColor:"#1f1f1f",
        borderBottomWidth:1,
        flexDirection: "row",
        justifyContent:"space-between"
        // paddingHorizontal:15,
    },
    buttonContainer: {
        alignItems:"center",
        flex:1,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
    },
    textMenu: {
        color:"#858585",
        fontSize:12,
        paddingTop:10,
        fontWeight:"600",
    },
    
})