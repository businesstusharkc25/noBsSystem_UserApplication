import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ContentShortDescription } from "../../../../sharedComponents";

const PodcastContentCompressed = ({ contentData }) => {
  return (
    <>
      <Image
        style={[styles.videoThumbnailImg]}
        source={{
          uri: "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />

      <ContentShortDescription contentData={contentData} />
    </>
  );
};

export default PodcastContentCompressed;
