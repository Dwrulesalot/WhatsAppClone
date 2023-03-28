import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

const Input = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>

        <View style={styles.inputContainer}>
            {
            //below allows for component to still be used without any icon
            props.icon && <props.iconPack 
            name={props.icon} 
            size={props.iconSize || 20} 
            style={styles.icon} 
            />
            }

            <TextInput style={styles.textInput} />
        </View>

        {
            props.errorText &&
            <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{props.errorText}</Text>

        </View>
        }



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
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: colors.grey 
  },
  label: {
    marginVertical: 8,
    fontFamily: 'bold',
    letterSpacing: 0.3,
    color: colors.textColor,

  },
  textInput: {
    color: colors.textColor,
    flex: 1,
    fontFamily: 'regular',
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    fontFamily: "regular",
    letterSpacing: 0.3,

  },
});

export default Input;
