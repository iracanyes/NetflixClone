import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  TouchableOpacity,
  StyleSheet, ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { MovieActionButtons, ProfilePicture } from '../../components';
import Colors from '../../constants/Colors';
import { Feather } from '@expo/vector-icons';
import CategoryList from "../../components/CategoryList";
import {S3Image} from "aws-amplify-react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [ user, setUser ] = useState(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <LinearGradient 
          colors={["rgba(0,0,0,0.3)","transparent"]}
          style={styles.header}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Netflix</Text>
            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.iconSearchButton}
                onPress={() => navigation.navigate('Root', { screen: 'Search'})}
              >
                <Feather 
                name="search" 
                color={Colors.light.tintFirst} 
                size={24}
                style={styles.iconSearch}
                />
              </TouchableOpacity>
              <ProfilePicture 
                // @ts-ignore
                image={user !== null ? user.image : 'https://www.fillmurray.com/1024/780'}
                size={30}
                styles={{
                  profileButton: {
                    borderWidth: 3,
                    backgroundColor: '#0000',
                    borderColor: Colors.dark.tintFirst,
                    borderRadius: 15,
                    padding: 5,
                    marginLeft: 5
                  },
                  profileImage: {},
                }}
                onPress={() => navigation.navigate('Profile')}
              />
            </View>
          </View>
          <View style={styles.subtitleContainer}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => navigation.navigate('Series')}
            >
              <Text style={styles.headerButtonText}>
                Séries            
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => navigation.navigate('Films')}
            >
              <Text style={styles.headerButtonText}>
                Films            
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => navigation.navigate('Favorite')}
            >
              <Text style={styles.headerButtonText}>
                Ma liste            
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
  
          <S3Image
            imgKey={'films/a0ff4d59-8aee-4c27-96d7-c3de269953c8.jpg'}
            // @ts-ignore
            style={styles.recommendedMovie}
            resizeMode={'cover'}
          />
          
          <MovieActionButtons
            movie={{}}
          />
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <CategoryList/>
        </ScrollView>
        
      </View>
      
      
      
    </SafeAreaView>
  );
}
