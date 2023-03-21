import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { ContentShortDescription } from "../../../../sharedComponents";

const VideoContentCompressed = ({ contentData }) => {
  return (
    <>
      <View style={[styles.videoThumbnailContainer]}>
        <Icon name="play" color={"white"} size={24} style={[styles.playIcon]} />
        <Image
          style={[styles.videoThumbnailImg]}
          source={{
            uri: "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
      </View>

      <ContentShortDescription contentData={contentData} />
    </>
  );
};

export default VideoContentCompressed;
