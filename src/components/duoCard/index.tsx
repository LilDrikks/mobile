import { GameController } from 'phosphor-react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface AdsProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: AdsProps;
  onConnect: () => void; 
}

export function DuoCard({data, onConnect}:Props) {
  
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={data.name}
      />
      <DuoInfo
        label='Tempo de jogo'
        value={`${data.yearsPlaying} ano(s)`}
      />
      <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label='Chamada de áudio?'
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? 'green' : 'red'}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={34} color={THEME.COLORS.TEXT}/>
        <Text style={styles.buttonText}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}