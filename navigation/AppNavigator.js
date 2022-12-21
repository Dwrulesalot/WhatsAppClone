import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";


//to do add in navigators to deal with: 
// signing in  &  using the app not signed in  &  missing account info 
const AppNavigator = (props) => {

    //const isSignedIn = checkIsSignedIn();
    //below: { isSignedIn && <MainNavigator />}
    //       { !isSignedIn && <SignInNavigator />}
  return <NavigationContainer>
    
    <MainNavigator />
  </NavigationContainer>;
};

export default AppNavigator;
