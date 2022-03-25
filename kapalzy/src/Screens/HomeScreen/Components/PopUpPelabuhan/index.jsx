import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./PopUpStyles";
import { AntDesign, Entypo } from '@expo/vector-icons';
import pelabuhan from '../../../../../assets/data/pelabuhan.json';

const PopUpPelabuhan = (props) => {

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
                <FlatList
                    data={pelabuhan}
                    renderItem={({ item }) => (
                        <View style={styles.harborContainer}>
                            <Entypo name="location-pin" size={30} color="black" />
                            <View style={{ marginLeft: 10 }}>
                                <Text>{item.provinsi}</Text>
                                <Text style={styles.harborName}>{item.nama}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default PopUpPelabuhan;