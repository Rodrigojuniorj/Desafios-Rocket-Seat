import { Text, View, TextInput  } from 'react-native';

import { styles } from "./styles";

export function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <TextInput style={styles.input} />
        </View>
    )
}