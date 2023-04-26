
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";

import logo from "../assets/images/logo.png";

const AuthScreen = props => {

  const [isSignedUp, setIsSignedUp] = useState(false);

  return <SafeAreaView style={{ flex:1 }}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
          style={styles.KeyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? "height" :undefined}>

            <View style={styles.imageContainer}>
              <Image 
              style={styles.image}
              source={logo} />
            </View>


            {
              isSignedUp ? 
              <SignUpForm /> :
              <SignInForm />
            }
            
            <TouchableOpacity 
            onPress={() => setIsSignedUp(prevState => !prevState)} 
            style={styles.switchContainer}> 
              
              <Text style ={styles.switch}>{ `Switch to ${isSignedUp ? "sign in" : "sign up"}` }</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </ScrollView>

      </PageContainer>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    submitStyle: {
        marginTop: 20
    },  
    switchContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15
  },  
  switch: {
    color: colors.blue,
    fontFamily: 'medium',
    letterSpacing: 0.3
  },  
  imageContainer: {
      justifyContent: 'center',
      alignItems: 'center'
  },  
  image: { 
    width: '40%',
    resizeMode: 'contain',
    marginBottom: -20
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default AuthScreen;