import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { typography, utilStyles } from "../../../styles";
import { calcDate } from "../../helper/helperFunctions";

const ContentShortDescription = ({ contentData = {} }) => {
  const { channelHandle = "", channelLogoUrl } = contentData?.channelInfo;

  const { createdAt } = contentData?.content;

  const { newsTitle, views, contentType } = contentData?.content;
  const today = new Date();

  return (
    <View style={{ padding: 4, backgroundColor: "#201E1E" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={[styles.channelImage]}
          source={{
            uri: channelLogoUrl,
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
            {newsTitle}
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
              {calcDate(today, createdAt)} by {channelHandle}
            </Text>

            <View style={[utilStyles.dotSeparator]} />

            <Text
              style={{
                fontSize: 10,
                color: typography.textWhite.color,
              }}
            >
              {views}
            </Text>

            {/* <View style={[utilStyles.dotSeparator]} />

            <Text
              style={{
                fontSize: 10,
                color: typography.textWhite.color,
              }}
            >
              {contentType?.charAt(0)?.toUpperCase() + contentType?.slice(1)}
            </Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContentShortDescription;
