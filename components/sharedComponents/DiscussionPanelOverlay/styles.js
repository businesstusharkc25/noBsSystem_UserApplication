import { StyleSheet } from "react-native";
import { colors, typography } from "../../../styles";

export const styles = StyleSheet.create({
  bottomSheetContentContainer: {
    backgroundColor: colors.appBaseBlack.backgroundColor,
    maxHeight: "60%",
  },

  addCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },

  sendIconImg: { height: 38, width: 38 },

  commentInputStyles: {
    color: typography.textWhite.color,
    borderWidth: 1,
    borderColor: colors.appBorderColor.borderColor,
    padding: 6,
    minWidth: "80%",
    borderRadius: 50,
  },

  commentContainer: {
    backgroundColor: colors.appDarkGrayBg.backgroundColor,
    padding: 16,
    position: "relative",
  },

  accountAddress: {
    color: typography.textGray.color,
    opacity: 0.6,
    fontSize: 12,
    marginBottom: 8,
  },

  comment: {
    color: typography.textWhite.color,
    paddingBottom: 16,
  },

  repliesContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 16,
  },

  replyIcon: { height: 10, width: 10, marginLeft: 8 },

  replyCount: { color: typography.textWhite.color, fontSize: 12 },
});
