import { FlatList, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Notification from "./Notification";

const NotificationPage = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title:
        "channel_name uploded a new video. channel_name uploded a new video.",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title:
        "channel_name uploded a new video. channel_name uploded a new video.",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title:
        "channel_name uploded a new video. channel_name uploded a new video.",
    },
  ];

  return (
    <SafeAreaView style={[styles.notificationPageContainer]}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <>
            <View style={{ margin: 6 }}>
              <Notification notification={item.title} />
            </View>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default NotificationPage;
