import { StyleSheet } from "react-native";
import { utilStyles } from "../../../../../styles";

export const styles = StyleSheet.create({
  videoThumbnailContainer: {
    position: "relative",
    minHeight: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  videoThumbnailImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  playIcon: {
    zIndex: utilStyles.zIndex100.zIndex,
  },
});
