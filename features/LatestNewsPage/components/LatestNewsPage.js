import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";

import {
  VideoContentCompressed,
  PodcastContentCompressed,
} from "../../../components";

const LatestNewsPage = () => {
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
    <ScrollView style={styles.latestNewsPageContainer}>
      <VideoContentCompressed contentData={tempData} />
      <PodcastContentCompressed contentData={tempData} />
      <VideoContentCompressed contentData={tempData} />
      <PodcastContentCompressed contentData={tempData} />
      <VideoContentCompressed contentData={tempData} />
      <VideoContentCompressed contentData={tempData} />
      <PodcastContentCompressed contentData={tempData} />
      <VideoContentCompressed contentData={tempData} />
      <PodcastContentCompressed contentData={tempData} />
      <VideoContentCompressed contentData={tempData} />
    </ScrollView>
  );
};

export default LatestNewsPage;
