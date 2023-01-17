import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#1A1A1A",
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 24,
    },
    contentItem: {
        display: 'flex',
        flexDirection: 'row',
    },
    contentItemText1: {
        color: '#4EA8DE',
        fontWeight: 'bold',
    },
    contentItemText2: {
        color: '#8284FA',
        fontWeight: 'bold',
    },
    numberItem: {
        marginLeft: 10,
        backgroundColor: '#333333',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    number: {
        color: '#D9D9D9',
    }
})