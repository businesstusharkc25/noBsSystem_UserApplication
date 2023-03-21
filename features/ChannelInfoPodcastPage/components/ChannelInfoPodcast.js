import { ScrollView, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ChannelInfo, PodcastContentCompressed } from "../../../components";

const ChannelInfoPodcast = ({ navigation }) => {
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
    <ScrollView style={[styles.channelInfoPageContainer]}>
      <View>
        <ChannelInfo navigation={navigation} />
        <PodcastContentCompressed contentData={tempData} />
        <PodcastContentCompressed contentData={tempData} />
        <PodcastContentCompressed contentData={tempData} />
      </View>
    </ScrollView>
  );
};

export default ChannelInfoPodcast;
