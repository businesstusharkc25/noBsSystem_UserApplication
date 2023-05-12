import { Image, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { ContentShortDescription } from "../../../../sharedComponents";
import { appRouteNames } from "../../../../../data";

const VideoContentCompressed = ({ contentData, navigation }) => {
  const { id } = contentData.content;

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate(appRouteNames.videoScreen, {
            id,
          })
        }
      >
        <View style={[styles.videoThumbnailContainer]}>
          <Icon
            name="play"
            color={"white"}
            size={24}
            style={[styles.playIcon]}
          />

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
        </View>
      </TouchableWithoutFeedback>

      <ContentShortDescription contentData={contentData} />
    </>
  );
};

export default VideoContentCompressed;
