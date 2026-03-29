import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../config/styles";

const Footer = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.footer}>
      <TextInput
        placeholder="Search for videos..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => onSearch(query)}>
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Footer;