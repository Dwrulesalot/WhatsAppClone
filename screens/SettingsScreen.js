import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingScreen = props => {
  return <View style={styles.container}>
      <Text>Main Settings screen</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default SettingScreen;