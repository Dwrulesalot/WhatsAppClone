import React, {useCallback, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

import backgroundImage from "../assets/images/droplet.jpeg";
import colors from "../constants/colors";//

const ChatScreen = (props) => {

  const [messageText, setMessageText] = useState("");
  //console.log(messageText);

  //re renders when message texts changes
  const sendMessage = useCallback(() => {
    setMessageText("");//temp to clear message

  }, [messageText]);

  //Keyboard avoiding view fix for both Ios and android so that the keyboard works as intended
  return (
  <KeyboardAvoidingView 
  style={styles.keyboardScreen}
  behavior={Platform.OS === "ios" ? "padding" : undefined}
  keyboardVerticalOffset={100}
  > 
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      />

      <View style={styles.inputContainer}>
        

        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={() => console.log("Attach button press")}>
          <AntDesign name="plus" size={28} color="black" />
        </TouchableOpacity>

        <TextInput 
        style={styles.textInput} 
        value={messageText}
        onChangeText={text => setMessageText(text)}
        onSubmitEditing={sendMessage}
        />
        
      
        {
        messageText === "" && //if message text is empty shows camera button
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={() => console.log("Camera button press")}>
          <AntDesign name="camera" size={28} color="black" />
        </TouchableOpacity>
        }

       {
        messageText !== "" && //if message contains text shows send button
        <TouchableOpacity 
        style={{...styles.buttonStyle, ...styles.sendButton}}//allows send button to be adjusted with all buttons if needed or just adjusted itself ie color etc
        onPress={sendMessage}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
        }
      
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.lightGreen,//how do i change color at the top where the the title is
  },
  keyboardScreen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGreen,
  },
  textInput: {//how do i get this to expand vertically rather than the text going off the screen?
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 5, 
    marginHorizontal: 10
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    paddingLeft: 2

  }
});

export default ChatScreen;
