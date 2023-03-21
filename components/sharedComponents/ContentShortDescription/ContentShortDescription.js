import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { typography, utilStyles } from "../../../styles";

const ContentShortDescription = ({ contentData = {} }) => {
  const {
    contentTitle,
    contentViews,
    channelHandle,
    uploadedTime,
    channelLogo,
    contentType,
  } = contentData;

  return (
    <View style={{ padding: 4, backgroundColor: "#201E1E" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={[styles.channelImage]}
          source={{
            uri: channelLogo,
          }}
        />

        <View style={{ width: "100%", padding: 10 }}>
          <Text
            style={{
              color: typography.textWhite.color,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            {contentTitle}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: typography.textWhite.color,
                fontSize: 10,
              }}
            >
              25 Min ago by {channelHandle}
            </Text>

            <View style={[utilStyles.dotSeparator]} />

            <Text
              style={{
                fontSize: 10,
                color: typography.textWhite.color,
              }}
            >
              {contentViews}
            </Text>

            <View style={[utilStyles.dotSeparator]} />

            <Text
              style={{
                fontSize: 10,
                color: typography.textWhite.color,
              }}
            >
              {contentType}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContentShortDescription;
