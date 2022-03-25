import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from './PopUpStyles';
import { AntDesign } from '@expo/vector-icons';

const PopUpJumlahPenumpang = (props) => {

    const changeState = (bool) => {
        props.closePopUp(bool);
    }

    return (
        <View style={styles.popUpBackground}>
            <View style={styles.popUp}>
                <View style={styles.popUpHeader}>
                    <Text style={styles.popUpTitle}>{props.title}</Text>
                    <AntDesign name="close" size={30} color="black" onPress={() => changeState(false)} />
                </View>
                <TextInput style={styles.inputBox} placeholder='Masukkan jumlah penumpang' />

                <View style={styles.submitContainer}>
                    <Pressable style={styles.submit}>
                        <Text style={{ fontWeight: 'bold' }}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    );
};

export default PopUpJumlahPenumpang;