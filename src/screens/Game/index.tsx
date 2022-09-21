import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { paramsProps } from '../../@types/navigation'; 
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import api from '../../context/Api';
import Logo from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { THEME } from '../../theme';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { AdsProps, DuoCard } from '../../components/duoCard';


export function Game() {
  const [ads, setAds] = useState<AdsProps[]>([])
  useEffect(() => {
    async function getAds() {
      const response = await api.get(`/games/${game.id}/ads`)
      setAds(response.data)
      console.log(ads)
    }
    getAds()
  }, [])

  const route = useRoute();
  const game = route.params as paramsProps;

  const nav = useNavigation();
  function backHome() {
    nav.navigate('home');
  }

  return (
    <Background>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={backHome}>
                <AntDesign name="left" size={32} color={THEME.COLORS.CAPTION_300} />
              </TouchableOpacity>

              <Image 
              source={Logo}
              style={styles.logo}
              />

              <View style={styles.right} />
         
            </View>

            <Image 
            source={{uri:game.bannerUrl}}
            style={styles.banner} resizeMode="cover" />

            <Heading title={game.title} subtitle='Conecte-se e começe a jogar!'/>
			
			      <FlatList
            contentContainerStyle={ads.length > 0 ? styles.contentList : styles.contentList2}
            data={ads}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<DuoCard data={item} onConnect={()=>{}} />)}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (<Text style={styles.notAds}>Não há anúncios publicado!</Text>)}
            />
			
        </SafeAreaView>
    </Background>
  );
}