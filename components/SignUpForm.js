import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import {View} from "react-native";

const SignUpForm = props => {
return 
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
        style={styles.submitStyle}
        />
        
 </>

};

export default SignUpForm;