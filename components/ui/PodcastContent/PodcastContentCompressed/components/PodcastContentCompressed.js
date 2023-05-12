import { Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ContentShortDescription } from "../../../../sharedComponents";
import { appRouteNames } from "../../../../../data";

const PodcastContentCompressed = ({ contentData = {}, navigation }) => {
  const { id } = contentData.content;

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate(appRouteNames.podcastScreen, {
            id,
          })
        }
      >
        {contentData?.content?.thumbnailUrl ? (
          <Image
            style={[styles.videoThumbnailImg]}
            source={{
              uri: contentData?.content?.thumbnailUrl,
            }}
          />
        ) : (
          <></>
        )}
      </TouchableWithoutFeedback>
      <ContentShortDescription contentData={contentData} />
    </>
  );
};

export default PodcastContentCompressed;
