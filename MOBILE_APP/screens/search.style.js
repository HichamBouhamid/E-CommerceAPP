import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xLarge,
    marginVertical: SIZES.medium,
    marginTop: SIZES.large,
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
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
},
searchImage: {
    resizeMode: "contain",
    width: SIZES.width -80,
    height: SIZES.height -300,
    opacity: 0.9
}
})

export default styles