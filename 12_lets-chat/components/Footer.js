import { View, Text } from 'react-native';

const Footer = () => {
  return (
    <View style={{position: 'absolute', bottom: 24, width: '100%', alignItems: 'center', backgroundColor: '#369', padding: 12}}>
      <Text style={{color: '#fff', fontSize: 16}}>Copyright © 2026 SSST/CS</Text>
    </View>
  )
}

export default Footer;