import { useState } from 'react';
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
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
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
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
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

              <Pressable onPress={onLoginPress} style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Login</Text>
              </Pressable>

              <View style={[styles.row, { marginTop: 18 }]}>
                <Pressable
                  onPress={onForgotPasswordPress}
                >
                  <Text style={styles.link}>Forgot</Text>
                  <Text style={styles.link}>password?</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate('Signup')}
                >
                  <Text style={styles.link}>Don't have an</Text>
                  <Text style={styles.link}>account? Sign up!</Text>
                </Pressable>
              </View>

            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
}