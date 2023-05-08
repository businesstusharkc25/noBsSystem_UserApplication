import { ScrollView, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { newsGenre } from "../../../data";
import NewsGenresTab from "./NewsGenresTab";
import {
  BlogContentCompressed,
  PodcastContentCompressed,
  VideoContentCompressed,
} from "../../../components";
import { useGetContentQuery } from "../../../services/appContentServices/appContentServices";

const ExplorePage = ({ route, navigation }) => {
  const {
    params: { selectedGenre },
  } = route;

  const { data, error } = useGetContentQuery({
    params: { contentCategory: selectedGenre },
  });

  return (
    <ScrollView style={[styles.explorePageContainer]}>
      <View>
        <ScrollView horizontal>
          <View style={{ flexDirection: "row" }}>
            {newsGenre.map(({ genreName, illustrationSrc }, index) => (
              <NewsGenresTab
                route={route}
                navigation={navigation}
                genreName={genreName}
                illustrationSrc={illustrationSrc}
                key={index}
              />
            ))}
          </View>
        </ScrollView>

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
                <BlogContentCompressed
                  contentData={result}
                  navigation={navigation}
                />
              </View>
            )}
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

export default ExplorePage;
