import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { typography, utilStyles } from "../../../../styles";
import ChannelContentNavigation from "./ChannelContentNavigation";

const ChannelInfo = ({ navigation }) => {
  return (
    <>
      <View style={[styles.infoContainer]}>
        <Image
          style={[styles.channelCoverImage]}
          source={{
            uri: "https://images.pexels.com/photos/3519190/pexels-photo-3519190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />

        <Image
          style={[styles.channelLogo]}
          source={{
            uri: "https://images.pexels.com/photos/3519190/pexels-photo-3519190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />

        <View style={[styles.membershipPrice]}>
          <Image
            style={[styles.ethIcon]}
            source={require("../../../../assets/icons/eth_icon.png")}
          />

          <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
            0.0223
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 12,
          paddingVertical: 6,
          justifyContent: "space-between",
        }}
      >
        <View style={{ paddingVertical: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: typography.textWhite.color }}>
              @channelHandle
            </Text>

            <View style={[utilStyles.dotSeparator]} />
            <Text style={{ color: typography.textWhite.color }}>
              channel_name
            </Text>
          </View>

          <Text
            style={{
              color: typography.textGray.color,
              fontSize: 12,
              paddingTop: 4,
            }}
          >
            2k Members | 204K Views | 254 News
          </Text>
        </View>

        <TouchableOpacity style={[styles.channelActionButton]}>
          <Text style={{ color: typography.textWhite.color }}>Join</Text>
        </TouchableOpacity>
      </View>

      <ChannelContentNavigation navigation={navigation} />
    </>
  );
};

export default ChannelInfo;
