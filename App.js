import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {

    const prepare = async () => {
      try {
        //Loads fonts
        await Font.loadAsync({
          "bold": require("./assets/fonts/static/RobotoMono-Bold.ttf"),
          "boldItalic": require("./assets/fonts/static/RobotoMono-BoldItalic.ttf"),
          "extraLight": require("./assets/fonts/static/RobotoMono-ExtraLight.ttf"),
          "extraLightItalic": require("./assets/fonts/static/RobotoMono-ExtraLightItalic.ttf"),
          "italic": require("./assets/fonts/static/RobotoMono-Italic.ttf"),
          "light": require("./assets/fonts/static/RobotoMono-Light.ttf"),
          "lightItalic": require("./assets/fonts/static/RobotoMono-LightItalic.ttf"),
          "medium": require("./assets/fonts/static/RobotoMono-Medium.ttf"),
          "mediumItalic": require("./assets/fonts/static/RobotoMono-MediumItalic.ttf"),
          "regular": require("./assets/fonts/static/RobotoMono-Regular.ttf"),
          "semiBold": require("./assets/fonts/static/RobotoMono-SemiBold.ttf"),
          "semiBoldItalic": require("./assets/fonts/static/RobotoMono-SemiBoldItalic.ttf"),
          "thin": require("./assets/fonts/static/RobotoMono-Thin.ttf"),
          "thinItalic": require("./assets/fonts/static/RobotoMono-ThinItalic.ttf"),
        });
      } catch (error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
      
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayout}>
      <SafeAreaView>
        <Text style={styles.label} >Hello</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: "medium"
  }
});
