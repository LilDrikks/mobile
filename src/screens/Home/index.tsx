import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import Logo from '../../assets/logo-nlw-esports.png';
import api from '../../context/Api';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';


export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  useEffect(() => {
   async function getGames() {
    const response = await api.get('/games');
    setGames(response.data);
   }
   getGames();

  }, [])

  const nav = useNavigation();
  function openGame({id, title, bannerUrl }: GameCardProps) {
    nav.navigate('game', {id, title, bannerUrl });
  }

  return (
      <Background>
        <SafeAreaView style={styles.container}>
          
          <Image
          source={Logo}
          style={styles.logo}
          />
          

          <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...'/>

          <FlatList 
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (<GameCard data={item} onPress={() => openGame(item)} />)}
          showsHorizontalScrollIndicator={false}
          horizontal
          />

          
        </SafeAreaView>
      </Background>
  );
}