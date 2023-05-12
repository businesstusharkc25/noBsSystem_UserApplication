import { StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import React from "react";

export default function useBottomNavStyles() {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    bottomNavContainer: {
      backgroundColor: "black",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 12,
    },

    bottomNavIcon: { height: 25, width: 25, margin: 8 },
  });

  return { styles };
}
