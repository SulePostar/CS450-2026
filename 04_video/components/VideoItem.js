import { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import youtube from "../services/youtube";
import styles from "../config/styles";

const VideoItem = ({ video }) => {
  const [details, setDetails] = useState(null);

  const fetchVideoDetails = async videoId => {
    try {
      const response = await youtube.get("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: videoId
        }
      });
      return response.data.items[0];
    } catch (error) {
      alert("Error fetching video details: " + error);
    }
  }

  useEffect(() => {
    const getVideoDetails = async () => {
      const details = await fetchVideoDetails(video.id.videoId);
      setDetails({
        duration: calcTime(details.contentDetails.duration),
        views: calcCount(details.statistics.viewCount),
        likes: calcCount(details.statistics.likeCount)
      });
    };
    getVideoDetails();
  }, [video.id.videoId]);

  return (
    <View style={styles.videoItem}>
      <Text style={styles.videoTitle} numberOfLines={1}>{video.snippet.title}</Text>
      <View style={styles.videoDetails}>
        <Image source={{ uri: video.snippet.thumbnails.medium.url }} style={styles.thumbnail} />
        <View style={styles.videoInfo}>
          <Text numberOfLines={4}>{video.snippet.description}</Text>
          {details && (
            <>
              <Text style={styles.duration}>{details.duration}</Text>
              <View style={styles.videoStats}>
                <Text style={styles.textStats}>
                  {details.views} <Ionicons name="eye" size={16} color="black" />
                </Text>
                <Text style={styles.textStats}>
                  {details.likes} <Ionicons name="heart" size={16} color="black" />
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

export default VideoItem;


const calcTime = duration => {
  const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if(!matches) return "0:00";
  const hours = matches[1] || '';
  const minutes = matches[2] || '0';
  const seconds = matches[3] || '0';
  return `${hours ? hours + ':' : ''}${minutes}:${seconds}`;
}

const calcCount = count => {
  if (count >= 1e9) return (count / 1e9).toFixed(1) + "B";
  if (count >= 1e6) return (count / 1e6).toFixed(1) + "M";
  if (count >= 1e3) return (count / 1e3).toFixed(1) + "K";
  return count.toString();
}