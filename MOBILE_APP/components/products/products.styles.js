import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd: 5,
        borderRadius: SIZES.large,
        backgroundColor: COLORS.white
    },
    separator: {
        height: 16,
    }
});

export default styles;