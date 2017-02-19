import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    contentView: {
        flex: 1,
        backgroundColor: 'rgba(191, 228, 255, 1)'
    },
    homeView: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'rgb(140, 207, 255)'
    },
    navBar: {
        backgroundColor: 'rgb(140, 207, 255)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    navBarTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'montserrat'
    },
    disclaimerText: {
        color: '#FFFFFF',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'merriweathersans'
    },
    buttonWrapper: {
        flex: .1
    },
    button: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    homeListItem: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeListItemTextWrapper: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(191, 228, 255, 0.7)'
    },
    categoryTitleText: {
        textAlign: 'left',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'montserrat',
        fontSize: 18
    },
    categoryInfoText: {
        textAlign: 'left',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'merriweathersans'
    },
    homeListItemText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'montserrat',
        fontSize: 18,
    }
});

export default styles;
