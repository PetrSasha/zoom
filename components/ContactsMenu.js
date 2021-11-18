import React from 'react'
import { View, Text ,Image, StyleSheet,Uri} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
const contacts = [
    {
        type:"contact",
        name:"Rick Sanjez",
        photo: require("../assets/rick.jpg")
    },
    {
        type:"contact",
        name:"Little Kid code-name:MALOI",
        photo: require("../assets/maloyi.jpg")
    },
    {
        type:"contact",
        name:"Tomazz Mrazz",
        photo: require("../assets/tommazz.jpg")
    }
]

const ContactsMenu = () => {
    return (
        <View style={styles.container}> 

            <View style={styles.row}>
                 {/* img */}
                <View style={styles.starredIcon}>
                    <AntDesign name="star" size={30} color="#efefef"/>
                </View>
                {/*  text */}
                <Text style={styles.text}>
                    Starred
                </Text>
            </View>
            {contacts.map((contact,index) => 
                <View style={styles.contactContainer} key={index}>
                    <Image style={styles.starredIcon} source={contact.photo}/>
                    <Text style={styles.text}>{contact.name}</Text>
                </View>
            )}
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {

    },
    starredIcon: {
        backgroundColor:"#333333",
        width:55,
        height:55,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:20,
        marginBottom:10,
    },
    row: {
        flexDirection: "row",
        marginTop:20,
        alignItems: "center",
    },
    text: {
        color: "white",
        paddingLeft:15,
        fontSize:18,
    },
    contactContainer:{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical:10,
        
        
    }
})