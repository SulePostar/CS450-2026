import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthenticationContext } from '../context/AuthenticationContext';
import { auth } from '../firebase/config';

const Header = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <View style={{ width: '100%', marginTop: 60, alignItems: 'center', backgroundColor: '#369', padding: 12 }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>🗨️ LET'S CHAT 🗨️</Text>
      {user &&
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 12 }}>
          <Text style={{ color: '#fff', fontSize: 20 }}>{user.nickname}</Text>
          <Button title="Logout" onPress={() => auth.signOut()} />
        </View>
      }
    </View>
  )
}

export default Header;