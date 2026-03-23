import { useState } from 'react';
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./config/styles";
import youtube from "./services/youtube";
import { Header, Main, Footer } from "./components";

const App = () => {
  const [videoList, setVideoList] = useState([]);

  const handleSearch = async query => {
    try {
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          q: query,
          maxResults: 5
        }
      });
      setVideoList(response.data.items);
    } catch (error) {
      alert("Error fetching videos: " + error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Main videoList={videoList} />
      <Footer onSearch={handleSearch} />
    </View>
  );
}

export default App;