import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from './PopUpStyles';
import { AntDesign } from '@expo/vector-icons';

const PopUpJumlahPenumpang = (props) => {

    const changeState = (bool) => {
        props.closePopUp(bool);
    }

    const [jumlahPenumpang, setJumlahPenumpang] = useState('')

    const onPressItem = (option) => {
        props.closePopUp(false);
        props.setData(option)
    }

    return (
        <View style={styles.popUpBackground}>
            <View style={styles.popUp}>
                <View style={styles.popUpHeader}>
                    <Text style={styles.popUpTitle}>{props.title}</Text>
                    <AntDesign name="close" size={30} color="black" onPress={() => changeState(false)} />
                </View>
                <TextInput style={styles.inputBox} placeholder='Masukkan jumlah penumpang' keyboardType="numeric" onChangeText={(text) => setJumlahPenumpang(text)} />

                <View style={styles.submitContainer}>
                    <Pressable style={styles.submit} onPress={() => onPressItem(jumlahPenumpang)}>
                        <Text style={{ fontWeight: 'bold' }}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    );
};

export default PopUpJumlahPenumpang;