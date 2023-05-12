import { ScrollView, View } from "react-native";
import React from "react";
import { styles } from "./styles";

import {
  VideoContentCompressed,
  PodcastContentCompressed,
  BlogContentCompressed,
} from "../../../components";
import { useGetContentQuery } from "../../../services/appContentServices/appContentServices";

const LatestNewsPage = ({ navigation }) => {
  const { data, error } = useGetContentQuery({
    params: { showLatestContent: true },
  });

  return (
    <ScrollView style={styles.latestNewsPageContainer}>
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

export default LatestNewsPage;
