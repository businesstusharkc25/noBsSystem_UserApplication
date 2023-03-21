import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import { typography, utilStyles } from "../../../styles";

const ChannelInfoShort = () => {
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
            uri: "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
                @channelHandle
              </Text>
              <View style={[utilStyles.dotSeparator]} />
              <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
                channel_name
              </Text>
            </View>
            <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
              2K Members
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
