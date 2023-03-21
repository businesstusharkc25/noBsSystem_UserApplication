import { StyleSheet } from "react-native";
import { typography } from "../../../../../styles";

export const styles = StyleSheet.create({
  newsTitles: {
    color: typography.textWhite.color,
    fontSize: 24,
    fontWeight: "700",
  },

  podcastContainer: { padding: 14 },

  contentUtilInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingBottom: 12,
  },

  podcastCoverImage: { minHeight: 350, marginTop: 20 },
});
