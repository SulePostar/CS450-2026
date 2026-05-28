import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from './Avatar';

const UserItem = ({ item }) => {
  const navigation = useNavigation();

  const itemSelected = () => {
    navigation.navigate('UserDetails', { userId: item.userId });
  }

  return (
    <Pressable style={styles.container} onPress={itemSelected}>
      <Avatar photo={item.avatar} size={70} />
      <Text style={{ fontSize: 24, fontWeight: '600' }}>{item.nickname}</Text>
      <Text style={{ fontSize: 36 }}>{item.role === 'admin' ? '👨‍💼' : '👩‍💻'}</Text>
    </Pressable>
  )
}

export default UserItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginHorizontal: 'auto',
    marginVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1
  }
});

