import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16,
        marginBottom: 8,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#F2F2F2',
        fontSize: 16,
        width: '80%',
    },
    textDisabled: {
        color: '#808080',
        fontSize: 16,
        width: '80%',
        textDecorationLine: 'line-through',
    },
    trash: {
        width: '10%',
        marginRight: 50,
    },
    circleBorder: {
        width: 24,
        height: 24,
        borderRadius: 50,
        marginRight: 8,
        marginLeft: 16,
        borderColor: '#4EA8DE',
        borderWidth: 1,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 50,
        marginRight: 8,
        marginLeft: 16,
        backgroundColor: '#5E60CE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkCircle: {
    }
    
})