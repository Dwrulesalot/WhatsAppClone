import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { View, Text, StyleSheet } from "react-native";

const SignInForm = props => {
return (
    <>
    
        <Input 
        label="Email" 
        icon= "mail" 
        iconPack={Feather} 
        />

        <Input 
        label="Password" 
        icon= "lock" 
        iconPack={Entypo} 
        />
        
        <SubmitButton 
        title="Sign in"
        onPress={() => console.log("Sign IN pressed")}
        disabled={false}
        />
        
 </>

)};

export default SignInForm;