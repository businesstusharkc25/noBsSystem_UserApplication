import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";
import Slider from "@react-native-community/slider";

const PodcastPlayer = () => {
  const [playbackObj, setPlaybackObj] = useState();
  const [soundObj, setSoundObj] = useState();
  const [isPodcastPlaying, setIsPodcastPlaying] = useState(false);
  const [positionMillis, setPositionMillis] = useState();
  const [durationMillis, setDurationMillis] = useState();

  const calculateCurrentPosition = () => {
    if (durationMillis && positionMillis) {
      return positionMillis / durationMillis;
    } else return 0;
  };

  const playAudio = async () => {
    if (!soundObj) {
      const playbackObj = new Audio.Sound();
      const status = playbackObj.loadAsync(
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/nobsnewsmedia.appspot.com/o/A_AP_Rocky_ft_Skepta_-_Praise_The_Lord_Da_Shine_.mp3?alt=media&token=f9f1193d-15dc-4636-b03e-f3223aa64579",
        },
        { shouldPlay: true }
      );

      setSoundObj(status);
      setPlaybackObj(playbackObj);
      setIsPodcastPlaying(true);
    } else if (soundObj.isLoaded && !soundObj.isPlaying) {
      const status = await playbackObj.playAsync();
      setSoundObj(status);
      setIsPodcastPlaying(true);
    } else {
      const status = await playbackObj.setStatusAsync({ shouldPlay: false });
      setSoundObj(status);
      setIsPodcastPlaying(false);
    }
  };

  useEffect(() => {
    playbackObj?.setOnPlaybackStatusUpdate((res) => {
      if (res.isLoaded && res.isPlaying) {
        setPositionMillis(res.positionMillis);
        setDurationMillis(res.durationMillis);
      }
    });
  }, [playbackObj]);

  return (
    <View style={[styles.controlContainer]}>
      <Icon
        name={isPodcastPlaying ? "pause" : "play"}
        onPress={playAudio}
        color={"white"}
        size={16}
        style={[styles.playIcon]}
      />
      <Slider
        style={{ height: 40, width: "95%" }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#ffffff"
        thumbTintColor="black"
        value={calculateCurrentPosition()}
        onValueChange={(value) => {
          setPositionMillis(value * durationMillis);
        }}
        onSlidingStart={async () => {
          if (!isPodcastPlaying) return;
          try {
            const status = await playbackObj.setStatusAsync({
              shouldPlay: false,
            });
            setSoundObj(status);
            setIsPodcastPlaying(false);
          } catch (error) {
            console.log(error);
          }
        }}
        onSlidingComplete={async (value) => {
          if (!soundObj) return;

          try {
            const status = await playbackObj.setPositionAsync(
              Math.floor(durationMillis * value)
            );

            await playbackObj.setStatusAsync({ shouldPlay: true });

            setSoundObj(status);
            setPositionMillis(status.positionMillis);
            setIsPodcastPlaying(true);
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </View>
  );
};

export default PodcastPlayer;

const styles = StyleSheet.create({
  controlContainer: {
    backgroundColor: "#201E1E",
    padding: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
