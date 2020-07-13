import { StyleSheet } from 'react-native';

const AppContainerStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'green'
    },
    navContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'purple'
    }
})

const headerStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'red'
    }
})

const footerStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'red'
    }
})

const pageStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'red'
    },
    button: {
        padding: 15,
        margin: 15,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 9999
    }
})

export { AppContainerStyle, headerStyle, footerStyle, pageStyle };