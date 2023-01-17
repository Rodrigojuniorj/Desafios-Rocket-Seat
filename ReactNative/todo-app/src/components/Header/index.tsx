import { Image, SafeAreaView, Text, View } from "react-native";

import { styles } from './styles'

import logo from '../../../assets/logo.png'

export function Header(){
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} />
        </SafeAreaView>
    )
}