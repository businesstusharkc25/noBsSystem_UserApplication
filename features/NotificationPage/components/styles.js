import { StyleSheet } from "react-native";
import { colors } from "../../../styles";

export const styles = StyleSheet.create({
  notificationPageContainer: {
    flex: 1,
    backgroundColor: colors.appBaseBlack.backgroundColor,
  },

  notificationRead: {
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 8,
    marginRight: 6,
    marginLeft: 6,
  },
  notificationUnRead: {
    backgroundColor: "#1C1B1B",
    padding: 12,
    borderRadius: 8,
    marginRight: 6,
    marginLeft: 6,
  },
});
