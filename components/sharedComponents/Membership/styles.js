import { StyleSheet } from "react-native";
import { colors } from "../../../styles";

export const styles = StyleSheet.create({
  membershipCardContainer: {
    backgroundColor: "#161616",

    position: "relative",
    marginTop: 4,
    marginBottom: 4,
  },

  channelLogoContainer: { width: 90, height: 90, borderRadius: 50, margin: 4 },

  ethIcon: {
    height: 16,
    width: 16,
  },

  actionButton: {
    position: "absolute",
    right: 10,
    bottom: 8,
    borderColor: colors.appBorderColor.borderColor,
    borderWidth: 1,
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#850101",
  },
});
