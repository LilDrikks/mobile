import { View, Modal, ModalProps, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    closeModal: ()=> void;
}

export function DuoMatch({discord, closeModal, ...rest} : Props) {
  return (
    <Modal
    {...rest}
    >
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity 
                    style={styles.closeIcon}
                    onPress={closeModal}
                >
                    <MaterialIcons
                    name='close'
                    size={20}
                    color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>
                <CheckCircle
                    color={THEME.COLORS.SUCCESS}
                    size={64}
                    weight={'bold'}
                />

                <Heading
                style={styles.heading}
                title="Let's Play"
                subtitle='Agora é só começar a jogar!'
                />
                
                <Text
                style={styles.addDiscord}
                >
                    Adicione no Discord
                </Text>
                <Text style={styles.discord}>
                    {discord}
                </Text>
            </View>
        </View>
    </Modal>
  );
}