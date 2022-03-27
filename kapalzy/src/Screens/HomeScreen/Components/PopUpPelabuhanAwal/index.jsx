import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./PopUpStyles";
import { AntDesign, Entypo } from '@expo/vector-icons';
import pelabuhan from '../../../../../assets/data/pelabuhan.json';

const PopUpPelabuhanAwal = (props) => {

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
                <FlatList
                    data={pelabuhan}
                    renderItem={({ item }) => (
                        <Pressable style={styles.harborContainer} onPress={() => onPressItem(item.nama)}>
                            <Entypo name="location-pin" size={30} color="black" />
                            <View style={{ marginLeft: 10 }}>
                                <Text>{item.provinsi}</Text>
                                <Text style={styles.harborName}>{item.nama}</Text>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
        </View>
    );
};

export default PopUpPelabuhanAwal;