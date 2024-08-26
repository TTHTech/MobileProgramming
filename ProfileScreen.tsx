import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Đây là cách import đúng

export default function ProfileScreen({ navigation }: any) {
  useEffect(() => {
   
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 10000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP._z8jWP-Swm33xxgRT_MdgQAAAA?rs=1&pid=ImgDetMain' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Từ Thanh Hoài</Text>
      <Text style={styles.bio}>
        Mình rất thích chơi game và xem phim. Cuối tuần mình thường đá bóng và đi cà phê với bạn bè.
      </Text>
      
      <View style={styles.socialContainer}>
        <Icon
          name="github"
          size={30}
          color="#fff"
          style={styles.icon}
          onPress={() => Linking.openURL('https://github.com/TTHTech')}
        />
        <Icon
          name="facebook"
          size={30}
          color="#fff"
          style={styles.icon}
          onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100049063427043')}
        />
        <Icon
          name="linkedin"
          size={30}
          color="#fff"
          style={styles.icon}
          onPress={() => Linking.openURL('https://www.instagram.com/')}
        />
      </View>

      <Text style={styles.contact}>Liên hệ: tthoai2401.learn@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e', // Áp dụng màu Universe (dark theme)
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  contact: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
});
