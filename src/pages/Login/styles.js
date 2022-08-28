import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor: colors.BACKGROUND
    },
    texto:{
        color:'white',
        fontFamily: fonts.BOLD
    },
    
})