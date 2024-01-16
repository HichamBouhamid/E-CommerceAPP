import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite,
    },
    image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignContent: 'center',
    },
    productImg:{
        width: "100%",
        height: 65,
        borderRadius: SIZES.small,
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    productTitle:{
        fontSize: SIZES.medium,
        fontFamily: "bold",
        color: COLORS.primary
    },
    supplier: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price: {
        fontFamily: "bold",
        fontSize: SIZES.medium,
    },

})

export default styles;