import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { typography } from "../../../../styles";
import { useRoute } from "@react-navigation/native";
import { appRouteNames } from "../../../../data";

const ChannelContentNavigation = ({ navigation }) => {
  const route = useRoute();

  const { name: currentRouteName } = route;

  const routeUserToContentCatagories = (route) => {
    navigation.navigate(appRouteNames[route]);
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginVertical: 6,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          routeUserToContentCatagories(appRouteNames.channelInfoArticlesScreen)
        }
      >
        <Text
          style={{
            padding: 5,
            borderRadius: 5,
            backgroundColor:
              currentRouteName == appRouteNames.channelInfoArticlesScreen
                ? "white"
                : "black",
            color:
              typography[
                currentRouteName == appRouteNames.channelInfoArticlesScreen
                  ? "textBlack"
                  : "textWhite"
              ].color,
          }}
        >
          Articles
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          routeUserToContentCatagories(appRouteNames.channelInfoVideosScreen)
        }
      >
        <Text
          style={{
            padding: 5,
            borderRadius: 5,
            backgroundColor:
              currentRouteName == appRouteNames.channelInfoVideosScreen
                ? "white"
                : "black",
            color:
              typography[
                currentRouteName == appRouteNames.channelInfoVideosScreen
                  ? "textBlack"
                  : "textWhite"
              ].color,
          }}
        >
          Videos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          routeUserToContentCatagories(appRouteNames.channelInfoPodcastScreen)
        }
      >
        <Text
          style={{
            padding: 5,
            borderRadius: 5,
            backgroundColor:
              currentRouteName == appRouteNames.channelInfoPodcastScreen
                ? "white"
                : "black",
            color:
              typography[
                currentRouteName == appRouteNames.channelInfoPodcastScreen
                  ? "textBlack"
                  : "textWhite"
              ].color,
          }}
        >
          Podcast
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChannelContentNavigation;
