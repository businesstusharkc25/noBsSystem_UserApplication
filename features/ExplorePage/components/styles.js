import { StyleSheet } from "react-native";
import { colors } from "../../../styles";

export const styles = StyleSheet.create({
  explorePageContainer: {
    backgroundColor: colors.appBaseBlack.backgroundColor,
  },

  genreContainer: {
    backgroundColor: "#171717",
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  genreIllustrationImage: {
    height: 70,
    width: 70,
    marginRight: "auto",
    marginLeft: "auto",
  },
});
