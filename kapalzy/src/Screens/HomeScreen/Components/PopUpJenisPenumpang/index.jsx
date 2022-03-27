import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './PopUpStyles';
import { AntDesign } from '@expo/vector-icons';

const PopUpJenisPenumpang = (props) => {

    const changeState = (bool) => {
        props.closePopUp(bool);
    }

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

                <Pressable style={styles.harborContainer} onPress={() => onPressItem('Dewasa')}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Dewasa</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.harborContainer} onPress={() => onPressItem('Remaja')}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Remaja</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.harborContainer} onPress={() => onPressItem('Anak-Anak')}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Anak-Anak</Text>
                    </View>
                </Pressable>
            </View>
        </View >
    );
};

export default PopUpJenisPenumpang;