import React,{useState, useEffect} from 'react'
import { View, Text,StyleSheet,TextInput, SafeAreaView,TouchableOpacity  } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer } from '@react-navigation/native'
import StartMeeting from '../components/StartMeeting'
import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {io} from "socket.io-client"
import {Camera} from "expo-camera"

let socket
const MeetingRoom = () => {
    const [name, setName] = useState("")
    const [roomId, setRoomId] = useState("")
    const [activeUsers, setActiveUsers] = useState()
    const [startCamera, setStartCamera] = useState(false)

    const __startCamera = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync()
        if(status === "granted") {
            setStartCamera(true)
        } else {
            Alert.alert("Access denied")
        }
    }
    

    const joinRoom = () => {
        __startCamera()
        socket.emit("join-room",{roomId:roomId, userName:name})
    }

    useEffect(() => {
        socket = io("http://ea2e-82-207-119-148.ngrok.io")
        console.log("yes")
        socket.on('connection' , () => console.log(' yes it is connected'))
        socket.on("all-users", users => {
            console.log("Active Users")
            console.log(users)
            setActiveUsers(users)
        })
    }, [])

    const footerIcons = [
        {   id:1,
            name:"microphone",
            title: "Toggle Microphone",
        },
        {
            id:2,
            name:"video-camera",
            title: "Toggle Camera",
        },
        {
            id:3,
            name:"upload",
            title: "Share",
        },
        {
            id:4,
            name:"group",
            title: "Make Group",
        },
        {
            id:5,
            name:"comment",
            title: "Leave Comment",
        },
    ]
    return (
        <View style={styles.container}>
        {/* Start Meeting Section */}
        {startCamera ? (
            <SafeAreaView>
                <Camera
                type={"front"}
                style={{width: "100%", height: "80%"}}

                >

                </Camera>
                <View style={styles.menu}>
                {footerIcons.map((footerIcon, index) =>
                
                    <TouchableOpacity key={index} style={"justify-content: center"}>
                        <FontAwesome name={footerIcon.name} color="white" size={30}/>
                        <Text style={styles.fontIcon}>{footerIcon.title}</Text>
                    </TouchableOpacity>
                )}
                   
                </View>
            </SafeAreaView>
        ):(
             <StartMeeting 
                name={name} 
                roomId={roomId} 
                setRoomId={setRoomId} 
                setName={setName}
                joinRoom={joinRoom}
            />
        ) }
           
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1c1c1c',
        flex:1,
    },
    menu:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height:200,
        paddingBottom: 50,
        paddingHorizontal: 10,
    },
    fontIcon: {
        color: 'white',
        fontSize: 10,
    }
    
})