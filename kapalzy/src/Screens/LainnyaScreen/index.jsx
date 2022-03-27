import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from './LainnyaStyles';
import { FontAwesome } from '@expo/vector-icons';

const LainnyaScreen = (props) => {

    const changeState = (bool) => {
        props.closePopUp(bool);
    }

    return (
        <Pressable style={styles.popUpBackground} onPress={() => changeState(false)}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Menu
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.box}>
                        <FontAwesome name="search" size={50} color="black" />
                        <Text style={{ fontSize: 10, marginTop: 10 }}>Cek Pemesanan</Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesome name="user" size={50} color="black" />
                        <Text style={{ fontSize: 10, marginTop: 10 }}>Detail Profile</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.box}>
                        <FontAwesome name="phone" size={50} color="black" />
                        <Text style={{ fontSize: 10, marginTop: 10 }}>Hubungi Kami</Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesome name="history" size={50} color="black" />
                        <Text style={{ fontSize: 10, marginTop: 10 }}>Riwayat Pemesanan</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default LainnyaScreen;