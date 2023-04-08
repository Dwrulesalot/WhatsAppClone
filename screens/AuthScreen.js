import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SubmitButton from "../components/SubmitButton";

const AuthScreen = props => {
  return <SafeAreaView style={{ flex:1 }}>
      <PageContainer>

        <SignUpForm />

      </PageContainer>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    submitStyle: {
        marginTop: 20
    },  
})

export default AuthScreen;