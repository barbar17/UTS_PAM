import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from "react-native";
import { Entypo } from '@expo/vector-icons';

import styles from "./PemesananStyles";
import pemesanan from "../../../assets/data/pemesanan.json";

const PemesananScreen = () => {

    const formatHarga = (num) => {
        return 'Rp ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00'
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />

            <View style={styles.banner}>
                <Text style={styles.bannerText}>Daftar Pemesanan</Text>
            </View>

            <FlatList
                data={pemesanan}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={styles.pemesananContainer}>
                            <View style={styles.perjalananContainer}>
                                <Text style={styles.namaPelabuhan}>{item.pelabuhan_awal}</Text>
                                <Entypo name="arrow-right" size={30} color="black" />
                                <Text style={styles.namaPelabuhan}>{item.pelabuhan_tujuan}</Text>
                            </View>
                            <View style={styles.infoPerjalanan}>
                                <Text style={{ fontWeight: 'bold' }}>Jadwal Masuk Pelabuhan</Text>
                                <Text>{item.tanggal}</Text>
                                <Text>{item.jam}</Text>
                            </View>
                            <View style={styles.infoPerjalanan}>
                                <Text style={{ fontWeight: 'bold' }}>Layanan</Text>
                                <Text>{item.layanan}</Text>
                            </View>
                            <View style={styles.infoTiketContainer}>
                                <Text>{item.jenis_penumpang} x {item.jumlah_penumpang}</Text>
                                <Text>{formatHarga(item.harga)}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default PemesananScreen;