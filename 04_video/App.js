import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ScrollView, View, Platform, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./config/styles";
import youtube from "./services/youtube";
import { Header, Main, Footer } from "./components";

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
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
    handleSearch();
    return () => console.log("Cleanup function called");
  }, [query]);

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
    >
      <View style={styles.app}>
        <StatusBar style="auto" />
        <Header />
        <Main videoList={videoList} />
        <ScrollView>
          <Footer onSearch={setQuery} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default App;