import { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase/config';

const PREFIX = "https://firebasestorage.googleapis.com/v0/b/lets-chat-8faf9.firebasestorage.app/o/avatar/";
const SUFFIX = "?alt=media&token=66b62aeb-e52c-41a7-9a90-03d6bff2bcaf";

// const photo = "wcus-pdx-andrew-p.png";

const Avatar = ({ photo, size = 100 }) => {
  ;
  const [url, setUrl] = useState(null);

  getDownloadURL(ref(storage, `${PREFIX}${photo}${SUFFIX}`))
    .then((url) => {
      setUrl(url);
    })
    .catch((error) => {
      console.error("Error fetching avatar URL:", error);
    });

  const styles = StyleSheet.create({
    avatar: {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderColor: '#369',
      borderWidth: 2
    },
  });

  return (
    <View>
      {url ? <Image source={{ uri: url }} style={styles.avatar} /> : <Text>No avatar provided</Text>}
    </View>
  );
}

export default Avatar;