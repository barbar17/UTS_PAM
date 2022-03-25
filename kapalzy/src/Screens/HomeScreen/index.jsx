import React, { useState } from "react";
import { Text, View, Pressable, Modal } from "react-native";
import { Fontisto, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";

import styles from './HomeStyles';
import PopUpPelabuhan from "./Components/PopUpPelabuhan";
import PopUpKelas from "./Components/PopUpKelas";
import PopUpJenisPenumpang from "./Components/PopUpJenisPenumpang";
import PopUpJumlahPenumpang from "./Components/PopUpJumlahPenumpang";

const HomeScreen = () => {

    const [popUpPelabuhanVisible, setPopUpPelabuhanVisible] = useState(false);
    const [popUpKelasVisible, setPopUpKelasVisible] = useState(false);
    const [popUpJenisPenumpangVisible, setPopUpJenisPenumpangVisible] = useState(false);
    const [popUpJumlahPenumpangVisible, setPopUpJumlahPenumpangVisible] = useState(false);
    const [popUpTitle, setPopUpTitle] = useState('')

    const popUpPelabuhan = (title) => {
        setPopUpPelabuhanVisible(true);
        setPopUpTitle(title);
    }

    const popUpKelas = (title) => {
        setPopUpKelasVisible(true);
        setPopUpTitle(title);
    }

    const popUpJenisPenumpang = (title) => {
        setPopUpJenisPenumpangVisible(true);
        setPopUpTitle(title);
    }

    const popUpJumlahPenumpang = (title) => {
        setPopUpJumlahPenumpangVisible(true);
        setPopUpTitle(title);
    }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false);
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    return (
        <View style={styles.container}>

            {/* Menu Pop Up */}
            <Modal transparent visible={popUpPelabuhanVisible} animationType='fade'>
                <PopUpPelabuhan closePopUp={setPopUpPelabuhanVisible} title={popUpTitle} />
            </Modal>

            <Modal transparent visible={popUpKelasVisible} animationType='fade'>
                <PopUpKelas closePopUp={setPopUpKelasVisible} title={popUpTitle} />
            </Modal>

            <Modal transparent visible={popUpJenisPenumpangVisible} animationType='fade'>
                <PopUpJenisPenumpang closePopUp={setPopUpJenisPenumpangVisible} title={popUpTitle} />
            </Modal>

            <Modal transparent visible={popUpJumlahPenumpangVisible} animationType='fade'>
                <PopUpJumlahPenumpang closePopUp={setPopUpJumlahPenumpangVisible} title={popUpTitle} />
            </Modal>

            {/* Tanggal dan Jam */}
            {show && (<DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
            />)}

            {/* Menu Home Palkapal */}
            <View style={styles.formContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        PALKAPAL
                    </Text>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Pelabuhan Awal</Text>
                    <View style={styles.inputBoxContainer}>
                        <Fontisto name="ship" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => popUpPelabuhan('Pilih Pelabuhan Awal')}>
                            <Text>Pilih Pelabuhan Awal</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Pelabuhan Tujuan</Text>
                    <View style={styles.inputBoxContainer}>
                        <Fontisto name="ship" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => popUpPelabuhan('Pilih Pelabuhan Tujuan')}>
                            <Text>Pilih Pelabuhan Tujuan</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Kelas Layanan</Text>
                    <View style={styles.inputBoxContainer}>
                        <MaterialCommunityIcons name="seat-passenger" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => popUpKelas('Pilih Kelas Layanan')}>
                            <Text>Pilih Kelas Layanan</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.inputBoxContainer}>
                        <FontAwesome5 name="calendar-alt" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => showMode('date')}>
                            <Text>Pilih Tanggal Masuk</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.inputBoxContainer}>
                        <FontAwesome5 name="clock" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => showMode('time')}>
                            <Text>Pilih Jam Masuk</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.inputBoxContainer}>
                    <Pressable style={styles.jenisPenumpang} onPress={() => popUpJenisPenumpang('Penumpang')}>
                        <Text>Dewasa</Text>
                    </Pressable>

                    <Pressable style={styles.jumlahPenumpang} onPress={() => popUpJumlahPenumpang('Penumpang')}>
                        <Text>1 Orang</Text>
                    </Pressable>
                </View>

                <View style={styles.submitContainer}>
                    <Pressable style={styles.submit}>
                        <FontAwesome5 name="search" size={24} color="black" />
                        <Text style={{ fontWeight: 'bold' }}>Buat Tiket</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;