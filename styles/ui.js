// every styles related to ui will be stored here
import { StyleSheet } from "react-native";
import spacing from "./spacing";

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    ...spacing.droidSafeArea,
  },
});

export default styles;
