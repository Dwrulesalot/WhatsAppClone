import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import backgroundImage from "../assets/images/droplet.jpeg";
import colors from "../constants/colors";//

const ChatScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => console.log("Attach button press")}>
          <AntDesign name="plus" size={28} color="black" />
        </TouchableOpacity>

        <TextInput style={styles.textInput} />
        <TouchableOpacity onPress={() => console.log("Camera button press")}>
          <AntDesign name="camera" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGreen
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 5
  }
});

export default ChatScreen;
