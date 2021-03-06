import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./PopUpStyles";
import { AntDesign } from '@expo/vector-icons';

const PopUpKelas = (props) => {

    const changeState = (bool) => {
        props.closePopUp(bool);
    }

    const onPressItem = (option) => {
        props.closePopUp(false);
        props.setData(option)
    }

    const kelas = ['VIP Class', 'First Class', 'Business Class', 'Economy Class'];

    return (
        <View style={styles.popUpBackground}>
            <View style={styles.popUp}>
                <View style={styles.popUpHeader}>
                    <Text style={styles.popUpTitle}>{props.title}</Text>
                    <AntDesign name="close" size={30} color="black" onPress={() => changeState(false)} />
                </View>

                <FlatList
                    data={kelas}
                    renderItem={({ item }) => (
                        <Pressable style={styles.harborContainer} onPress={() => onPressItem(item)}>
                            <View style={{ marginLeft: 10, flexDirection: "row", alignItems: 'center' }}>
                                <Text>{item}</Text>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={index => index}
                />
            </View>
        </View>
    );
};

export default PopUpKelas;