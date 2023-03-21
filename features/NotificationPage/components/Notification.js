import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { typography } from "../../../styles";

const Notification = ({ notification, isRead = false }) => {
  return (
    <View
      style={isRead ? [styles.notificationRead] : [styles.notificationUnRead]}
    >
      <Text style={{ color: typography.textWhite.color }}>{notification}</Text>
    </View>
  );
};

export default Notification;
