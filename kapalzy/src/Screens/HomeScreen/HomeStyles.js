import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb',
        padding: 10,
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
    },
    titleContainer: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    inputBoxTitle: {
        color: 'grey',
        fontSize: 14,
        marginVertical: 5,
    },
    inputBoxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputBox: {
        marginLeft: 'auto',
        width: '88%',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
    },
    jenisPenumpang: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: 'lightgrey',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '50%',
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        marginTop: 25,
    },
    jumlahPenumpang: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: 'lightgrey',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '50%',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        marginTop: 25,
    },
    submitContainer: {
        alignItems: 'center',
    },
    submit: {
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        backgroundColor: 'gold',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        borderRadius: 5,
        marginTop: 25,
        marginBottom: 10,
    },
});

export default styles;