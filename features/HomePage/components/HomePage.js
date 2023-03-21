import { ScrollView, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import {
  BlogContentCompressed,
  PodcastContentCompressed,
  VideoContentCompressed,
} from "../../../components/ui";

const HomePage = ({ navigation }) => {
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
    <ScrollView style={[styles.homePageContainer]}>
      <View style={{ marginTop: 4 }}>
        <VideoContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <BlogContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <PodcastContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <VideoContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <BlogContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <PodcastContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <VideoContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <BlogContentCompressed contentData={tempData} />
      </View>
      <View style={{ marginTop: 4 }}>
        <PodcastContentCompressed contentData={tempData} />
      </View>
    </ScrollView>
  );
};

export default HomePage;
