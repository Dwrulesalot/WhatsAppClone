import { StyleSheet, View } from "react-native"

const PageContainer = props => { // below allows for style change in uses of this component
    return <View style={{ ...styles.container.backgroundColor, ...props.style}}> 
       {props.children} 
    </View>
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex:1, 
        backgroundColor: 'white'
    }
})

export default PageContainer;