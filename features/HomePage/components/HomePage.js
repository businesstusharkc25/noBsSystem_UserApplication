import { ScrollView, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import {
  BlogContentCompressed,
  PodcastContentCompressed,
  VideoContentCompressed,
} from "../../../components/ui";
import { useGetContentQuery } from "../../../services/appContentServices/appContentServices";

const HomePage = ({ navigation }) => {
  const { data, error } = useGetContentQuery({});

  return (
    <ScrollView style={[styles.homePageContainer]}>
      {data?.results?.map((result, index) => (
        <React.Fragment key={index}>
          {result?.content.contentType == "VIDEO" ? (
            <View style={{ marginTop: 4 }}>
              <VideoContentCompressed
                contentData={result}
                navigation={navigation}
              />
            </View>
          ) : result?.content.contentType == "PODCAST" ? (
            <View style={{ marginTop: 4 }}>
              <PodcastContentCompressed
                contentData={result}
                navigation={navigation}
              />
            </View>
          ) : (
            <View style={{ marginTop: 4 }}>
              <BlogContentCompressed contentData={result} />
            </View>
          )}
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default HomePage;
