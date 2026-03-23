import { View, FlatList } from 'react-native';
import styles from "../config/styles";
import VideoItem from "./VideoItem";

const Main = ({ videoList }) => {
  return (
    <View style={styles.main}>
      <FlatList
        data={videoList}
        renderItem={({ item }) => <VideoItem video={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Main;