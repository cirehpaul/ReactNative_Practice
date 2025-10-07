import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/favicon.png';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Home</Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>

      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  link: {
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: '600',
  },
});
