import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 24,
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: -15,
    },
    input: {
        flex: 1,
        marginRight: 10,
        height: 54,
        borderRadius: 6,
        backgroundColor: '#262626',
        padding: 10,
        color: '#F2F2F2',
        borderColor: '#0D0D0D',
        borderWidth: 1,
    },
    button: {
        width: 52,
        height: 54,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    }
})