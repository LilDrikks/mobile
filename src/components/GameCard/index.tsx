import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {

  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground 
        source={{uri: data.bannerUrl}}
        style={styles.cover}
        >
            <LinearGradient
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}
            >
                <Text style={styles.name}>
                    {data.title}
                </Text>
                <Text style={styles.ads}>
                    {data._count.ads}
                </Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}