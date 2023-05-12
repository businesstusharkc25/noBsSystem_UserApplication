import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import { typography } from "../../../styles";
import { formatCompactNumber } from "../../helper/helperFunctions";

const ChannelInfoShort = ({ channelInfo = {} }) => {
  const { channelHandle, channelName, channelLogoUrl, membershipHoldersCount } =
    channelInfo;

  return (
    <View style={[styles.channelInfoContainerBox]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={[styles.channelLogoImage]}
          source={{
            uri: channelLogoUrl,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            padding: 8,
          }}
        >
          <View>
            <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
              @{channelHandle}
            </Text>

            <Text
              style={{
                color: typography.textWhite.color,
                fontSize: 12,
                paddingVertical: 2,
              }}
            >
              {channelName}
            </Text>
            <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
              {formatCompactNumber(membershipHoldersCount)} Members
            </Text>
          </View>
          <TouchableOpacity style={[styles.actionButton]}>
            <Text style={{ color: typography.textWhite.color }}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChannelInfoShort;
