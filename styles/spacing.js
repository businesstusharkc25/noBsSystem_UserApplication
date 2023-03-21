// every styles related to spacing will be stored here
import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default styles;
