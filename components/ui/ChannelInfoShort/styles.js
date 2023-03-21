import { StyleSheet } from "react-native";
import { colors } from "../../../styles";

export const styles = StyleSheet.create({
  channelInfoContainerBox: {
    backgroundColor: colors.appDarkGrayBg.backgroundColor,
    padding: 12,
  },

  channelLogoImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.appBorderColor.borderColor,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: colors.appBorderColor.borderColor,
    padding: 10,
    borderRadius: 6,
  },
});
