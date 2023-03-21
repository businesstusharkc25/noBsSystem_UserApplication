import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appRouteNames } from "./data";
import UserWelcomeScreen from "./screens/WelcomeScreen";
import HomePageScreen from "./screens/HomePageScreen";
import { AppHeader } from "./components";
import SearchScreen from "./screens/SearchScreen";
import NotificationScreen from "./screens/NotificationScreen";
import VideoScreen from "./screens/ContentScreens/VideoScreen";
import PodcastScreen from "./screens/ContentScreens/PodcastScreen";
import MembershipListScreen from "./screens/MembershipScreens/MembershipListScreen";
import ChannelInfoVideos from "./screens/ChannelScreens/ChannelInfoVideos";
import ChannelInfoPodcasts from "./screens/ChannelScreens/ChannelInfoPodcasts";
import ChannelInfoArticles from "./screens/ChannelScreens/ChannelInfoArticles";
import LatestNewsScreen from "./screens/LatestNewsScreen";
import ExploreScreen from "./screens/ExploreScreen";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  const defaultHeaderOptions = ({ navigation }) => {
    return {
      header: () => <AppHeader navigation={navigation} />,
    };
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={appRouteNames.welcomeScreen}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={appRouteNames.welcomeScreen}
          component={UserWelcomeScreen}
        />
        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.homePageScreen}
          component={HomePageScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={appRouteNames.searchScreen}
          component={SearchScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.notificationScreen}
          component={NotificationScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.videoScreen}
          component={VideoScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.podcastScreen}
          component={PodcastScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.membershipListsScreen}
          component={MembershipListScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.channelInfoVideosScreen}
          component={ChannelInfoVideos}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.channelInfoPodcastScreen}
          component={ChannelInfoPodcasts}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.channelInfoArticlesScreen}
          component={ChannelInfoArticles}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.latestNews}
          component={LatestNewsScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.exploreNews}
          component={ExploreScreen}
          initialParams={{ selectedGenre: "business" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
