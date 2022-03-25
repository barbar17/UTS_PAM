import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from './PopUpStyles';
import { AntDesign } from '@expo/vector-icons';

const PopUpJenisPenumpang = (props) => {

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

                <View style={styles.harborContainer}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Dewasa</Text>
                    </View>
                </View>

                <View style={styles.harborContainer}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Remaja</Text>
                    </View>
                </View>

                <View style={styles.harborContainer}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Anak-Anak</Text>
                    </View>
                </View>
            </View>
        </View >
    );
};

export default PopUpJenisPenumpang;