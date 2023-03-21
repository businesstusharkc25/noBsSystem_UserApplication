import { ScrollView, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { newsGenre } from "../../../data";
import NewsGenresTab from "./NewsGenresTab";
import {
  PodcastContentCompressed,
  VideoContentCompressed,
} from "../../../components";

const ExplorePage = ({ route, navigation }) => {
  const tempData = {
    contentTitle: "News Title",
    contentViews: "200K",
    channelHandle: "TusharKc",
    channelLogo:
      "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contentThumbnail:
      "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contentType: "Dummy Content Type",
  };

  return (
    <ScrollView style={[styles.explorePageContainer]}>
      <View>
        <ScrollView horizontal>
          <View style={{ flexDirection: "row" }}>
            {newsGenre.map(({ genreName, illustrationSrc }, index) => (
              <NewsGenresTab
                route={route}
                navigation={navigation}
                genreName={genreName}
                illustrationSrc={illustrationSrc}
                key={index}
              />
            ))}
          </View>
        </ScrollView>

        <VideoContentCompressed contentData={tempData} />
        <PodcastContentCompressed contentData={tempData} />
        <VideoContentCompressed contentData={tempData} />
        <PodcastContentCompressed contentData={tempData} />
        <VideoContentCompressed contentData={tempData} />
        <PodcastContentCompressed contentData={tempData} />
      </View>
    </ScrollView>
  );
};

export default ExplorePage;
