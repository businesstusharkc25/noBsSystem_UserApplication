import { StyleSheet } from "react-native";
import { colors, typography } from "../../../styles";

export const styles = StyleSheet.create({
  searchInput: {
    color: typography.textWhite.color,
    borderWidth: 1,
    borderColor: colors.appBorderColor.borderColor,
    padding: 8,
    margin: 16,
    borderRadius: 8,
  },
});
