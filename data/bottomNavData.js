import appRouteNames from "./appRouteNames";

const bottomNavData = [
  {
    image: require("../assets/icons/home_icon.png"),
    navigateTo: appRouteNames.homePageScreen,
  },
  {
    image: require("../assets/icons/latestNews_icon.png"),
    navigateTo: appRouteNames.latestNews,
  },
  {
    image: require("../assets/icons/explore_icon.png"),
    navigateTo: appRouteNames.exploreNews,
  },
  {
    image: require("../assets/icons/subscriptions_icon.png"),
    navigateTo: appRouteNames.membershipListsScreen,
  },
];

export default bottomNavData;
