import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    wText:(color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.large -10,
        marginTop: SIZES.xSmall,
        marginTop: top,
        color: color,
        margin: -5,
        marginHorizontal: 12
    }),
    searchBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.xLarge,
        marginVertical: SIZES.medium,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.primary,
        marginTop: SIZES.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
       
    },
    searchButton: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.xSmall,
        justifyContent: "center",
        alignItems: "center",
    },

})

export default styles