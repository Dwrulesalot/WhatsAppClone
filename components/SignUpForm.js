import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { View, Text, StyleSheet } from "react-native";

const SignUpForm = props => {
return (
    <>
    <Input 
        label="First Name" 
        icon= "user-circle-o" 
        iconPack={FontAwesome} 
        />

        <Input 
        label="Last Name" 
        icon= "user-circle-o" 
        iconPack={FontAwesome} 
        />

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
        title="Sign Up"
        onPress={() => console.log("Sign UP pressed")}
        disabled={false}
        />
        
 </>

)};

export default SignUpForm;