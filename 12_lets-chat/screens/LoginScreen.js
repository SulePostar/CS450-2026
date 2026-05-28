import { useContext, useState } from 'react';
import background from '../assets/background.jpg';
import styles from '../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Switch,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';
import { auth, db } from '../firebase/config';
import { query, getDocs, collection, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthenticationContext } from '../context/AuthenticationContext';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

export default function LoginScreen() {
  const { user, setUser} = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation();

  const onLoginPress = () => {
    if (email === '' || password === '') {
      alert('Please enter email and password');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const currentUser = userCredential.user;

        const docRef = collection(db, 'users');
        const q = query(docRef, where('userId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs[0].data();
        setUser({
          userId: currentUser.uid,
          email: currentUser.email,
          nickname: userData.nickname,
          avatar: userData.avatar,
          role: userData.role
        });
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        alert(error.message);
      });
  };

  const onForgotPasswordPress = () => {
    alert('FORGOT_PASSWORD');
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background}>
        <View>
          <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.card}>
              <Text style={styles.title}>Please sign in</Text>

              <View style={styles.field}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter email"
                  placeholderTextColor="lightgray"
                  returnKeyType="next"
                  onChangeText={setEmail}
                  style={styles.input}
                  textContentType="email"
                  keyboardType='email-address'
                />
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter password"
                  placeholderTextColor="lightgray"
                  returnKeyType="done"
                  secureTextEntry
                  onChangeText={setPassword}
                  // onSubmitEditing={onLoginPress}
                  style={styles.input}
                  textContentType="password"
                />
              </View>

              <View style={styles.row}>
                <Pressable
                  onPress={toggleRememberMe}
                  style={styles.rememberMe}
                  accessibilityRole="button"
                  accessibilityLabel="Toggle remember me"
                >
                  <Switch
                    value={rememberMe}
                    onValueChange={toggleRememberMe}
                    trackColor={{ false: 'lightgrey', true: 'blue' }}
                    thumbColor="#3a7bff"
                  />
                  <Text style={styles.rememberMeText}>Remember me</Text>
                </Pressable>
              </View>

              <Button title="Login" onPress={onLoginPress} />

              <View style={[styles.row, { marginTop: 18 }]}>
                <LinkButton onPress={onForgotPasswordPress} labels={['Forgot', 'password?']} />
                <LinkButton onPress={() => navigation.navigate('Signup')} labels={["Don't have an", "account? Sign up!"]} />
              </View>

            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
}