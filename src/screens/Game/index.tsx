import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { paramsProps } from '../../@types/navigation'; 
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { THEME } from '../../theme';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';

export function Game() {
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
			
			      <DuoCard/>
			
        </SafeAreaView>
    </Background>
  );
}