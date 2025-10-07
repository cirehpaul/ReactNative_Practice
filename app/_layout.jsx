import { StyleSheet, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { Color } from '../constants/color';

const RootLayout = () => {
  const colorScheme = useColorScheme(); 
  const theme = Color[colorScheme] ?? Color.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.text, 
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact'

      }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
