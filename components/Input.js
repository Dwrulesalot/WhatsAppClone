import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

const Input = (props) => {
  return (
    <View style={styles.container}>
        <Text>{props.label}</Text>

        <View style={styles.inputContainer}>
            {
            //below allows for component to still be used without any icon
            props.icon && <props.iconPack 
            name={props.icon} 
            size={24} 
            style={styles.icon} 
            />
            }

            <TextInput />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: colors.offWhite,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    color: colors.grey 
  }
});

export default Input;
