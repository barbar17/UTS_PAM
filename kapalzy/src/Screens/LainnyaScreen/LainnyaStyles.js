import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    popUpBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 3,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        width: 105,
        height: 105,
        marginHorizontal: 10,
        marginVertical: 10,
    },
});

export default styles;