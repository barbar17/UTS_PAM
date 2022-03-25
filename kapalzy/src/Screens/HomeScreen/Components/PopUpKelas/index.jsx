import React from "react";
import { View, Text } from "react-native";
import styles from "./PopUpStyles";
import { AntDesign } from '@expo/vector-icons';

const PopUpKelas = (props) => {

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
                    <View style={{ marginLeft: 10, flexDirection: "row", alignItems: 'center' }}>
                        <Text>VIP Class</Text>
                        <AntDesign style={{ marginLeft: 10 }} name="star" size={24} color="gold" />
                    </View>
                </View>

                <View style={styles.harborContainer}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>First Class</Text>
                    </View>
                </View>

                <View style={styles.harborContainer}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Business Class</Text>
                    </View>
                </View>

                <View style={styles.harborContainer}>
                    <View style={{ marginLeft: 10 }}>
                        <Text>Economy Class</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PopUpKelas;