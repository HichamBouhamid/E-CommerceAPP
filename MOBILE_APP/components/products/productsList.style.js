import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 40,
    },
    container: {
        paddingTop: SIZES.xxLarge,
    },
    seperator: {
        height: 20
    }

})

export default styles;