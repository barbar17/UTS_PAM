import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    banner: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00578a',
        paddingTop: 25,
        paddingBottom: 20,
        elevation: 3,
    },
    bannerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    pemesananContainer: {
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        elevation: 3,
        padding: 15,
        backgroundColor: '#cbcbcb',
    },
    perjalananContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    namaPelabuhan: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    infoPerjalanan: {
        paddingBottom: 5,
    },
    infoTiketContainer: {
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;