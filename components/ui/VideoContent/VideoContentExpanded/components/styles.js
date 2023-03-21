import { StyleSheet } from "react-native";
import { typography } from "../../../../../styles";

export const styles = StyleSheet.create({
  videoTitle: {
    color: typography.textWhite.color,
    fontSize: 16,
    fontWeight: "700",
  },
  videoDescription: {
    color: typography.textGray.color,
    paddingTop: 4,
    paddingBottom: 4,
  },
  videoDescriptionContainer: { padding: 10, backgroundColor: "#201E1E" },
});
