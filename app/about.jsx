import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { Color } from '../constants/color';

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Color[colorScheme] ?? Color.light; 

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>About Page</Text>

      <Link href="/" style={[styles.link, { backgroundColor: theme.primary }]}>
        Back Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: '600',
    textDecorationLine: 'none',
  },
});
