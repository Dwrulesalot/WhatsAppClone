import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";


//to do add in navigators to deal with: 
// signing in  &  using the app not signed in  &  missing account info 
const AppNavigator = (props) => {

    //const isSignedIn = checkIsSignedIn(); // need to add this function-ality
    const isSignedIn = false;
    //below: { isSignedIn && <MainNavigator />}
    //       { !isSignedIn && <SignInNavigator />}
  return <NavigationContainer>
    
    {isSignedIn && <MainNavigator />}
    {!isSignedIn && <AuthScreen />}
  </NavigationContainer>;
};

export default AppNavigator;
