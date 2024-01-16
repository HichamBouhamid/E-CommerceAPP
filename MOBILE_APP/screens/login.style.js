import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
    title: {
        marginTop: 80,
        fontFamily: 'bold',
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: SIZES.xxLarge,
    },
    wrapper: {
        marginBottom: 20,
       
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.xSmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: 'right',
    },
    inputWrapper: (borderColor)=> ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 54,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    }),
    iconStyle: {
        marginRight: 10,
    },
    errorMessage: {
        color: COLORS.red,
        fontFamily: 'regular',
        marginTop: 5,
        marginLeft: 5,
        fontSize: SIZES.xSmall,
    },
    registration: { 
        
        textAlign: 'center',
    }
});

export default styles;