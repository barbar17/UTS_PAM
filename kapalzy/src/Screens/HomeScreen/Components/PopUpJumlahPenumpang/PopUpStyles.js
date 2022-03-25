import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    popUpBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    popUp: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    popUpHeader: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    popUpTitle: {
        marginRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    harborContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
    },
    harborName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputBox: {
        fontSize: 16,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
    },
    submitContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    submit: {
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'gold',
        alignItems: 'center',
    },
});

export default styles;