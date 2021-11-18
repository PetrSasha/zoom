import React from 'react'
import { View, Text,StyleSheet,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const StartMeeting = ({name, roomId, setName,setRoomId, joinRoom}) => {
    return (
        <>
         <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        name={name}
                        placeholder="Enter name..."
                        placeholderTextColor="#767476"
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={roomId}
                        placeholder="Enter room ID..."
                        placeholderTextColor="#767476"
                        onChangeText={text => setRoomId(text)}
                        
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity 
                            onPress={() => joinRoom()} 
                            style={styles.startMeetingButton}>
                        <Text style={{color:"white", fontWeight:"bold"}}>
                            Start Meeting
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default StartMeeting
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1c1c1c',
        flex:1,
    },
    textInput:{
        color:'#fff',
        fontSize:16,
        width: '100%',
    },
    info:{
        width:'100%',
        backgroundColor:'#373538',
        height: 50,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#484648',
        padding: 12,
        justifyContent:"center",
    },
    startMeetingContainer:{
        marginTop:10,
    },
    startMeetingButton:{
        height:50,
        width:250,
        marginTop:20,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#0470DC",
        borderRadius:15,
    }
})
