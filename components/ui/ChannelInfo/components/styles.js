import { StyleSheet } from "react-native";
import { colors } from "../../../../styles";

export const styles = StyleSheet.create({
  infoContainer: {
    position: "relative",
    minHeight: 180,
  },

  channelCoverImage: { minHeight: 150 },

  channelLogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: colors.appBorderColor.borderColor,
    borderWidth: 2,
    position: "absolute",
    bottom: 0,
    marginLeft: 12,
  },

  ethIcon: {
    height: 16,
    width: 16,
  },
  membershipPrice: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 12,
    bottom: 2,
  },

  channelActionButton: {
    padding: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.appBorderColor.borderColor,
  },
});
