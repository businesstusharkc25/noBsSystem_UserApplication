import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../styles";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: spacing.droidSafeArea.paddingTop,
    backgroundColor: colors.appBaseBlack.backgroundColor,
    borderBottomColor: colors.appBorderColor.borderColor,
    borderBottomWidth: 1,
    padding: 12,
  },
  headerLogo: {
    color: typography.textWhite.color,
    fontSize: 20,
    fontWeight: 900,
  },
  appInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerNotificationIcon: {
    paddingHorizontal: 15,
  },
  notificationIndicator: {
    position: "absolute",
    right: 8,
    height: 7,
    width: 7,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
