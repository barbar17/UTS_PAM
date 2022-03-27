import React, { useState } from "react";
import { Text, View, Pressable, Modal, StyleSheet } from "react-native";
import { Fontisto, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import 'moment/locale/id';
moment().locale('id');

import styles from './HomeStyles';
import PopUpPelabuhanAwal from "./Components/PopUpPelabuhanAwal";
import PopUpPelabuhanTujuan from "./Components/PopUpPelabuhanTujuan";
import PopUpKelas from "./Components/PopUpKelas";
import PopUpJenisPenumpang from "./Components/PopUpJenisPenumpang";
import PopUpJumlahPenumpang from "./Components/PopUpJumlahPenumpang";

const HomeScreen = () => {

    //Setting pop up visibilitas dan title
    const [popUpPelabuhanAwalVisible, setPopUpPelabuhanAwalVisible] = useState(false);
    const [popUpPelabuhanTujuanVisible, setPopUpPelabuhanTujuanVisible] = useState(false);
    const [popUpKelasVisible, setPopUpKelasVisible] = useState(false);
    const [popUpJenisPenumpangVisible, setPopUpJenisPenumpangVisible] = useState(false);
    const [popUpJumlahPenumpangVisible, setPopUpJumlahPenumpangVisible] = useState(false);
    const [popUpTitle, setPopUpTitle] = useState('')

    const popUpPelabuhanAwal = (title) => {
        setPopUpPelabuhanAwalVisible(true);
        setPopUpTitle(title);
    }

    const popUpPelabuhanTujuan = (title) => {
        setPopUpPelabuhanTujuanVisible(true);
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

    //setting tanggal dan jam
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShowDate(false);

        let tempDate = new Date(currentDate);
        let fullDate = moment(tempDate).format('Do MMMM YYYY');

        setTanggal(fullDate);
    }

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShowTime(false);

        let tempDate = new Date(currentDate);
        let fullTime = moment(tempDate).format('HH:mm')

        setJam(fullTime);
    }

    //setting data yang dipilih
    const [pelabuhan_awal, setPelabuhan_awal] = useState('Pilih Pelabuhan Awal');
    const [pelabuhan_tujuan, setPelabuhan_tujuan] = useState('Pilih Pelabuhan Tujuan');
    const [layanan, setLayanan] = useState('Pilih Kelas Layanan');
    const [jenis_penumpang, setjenis_Penumpang] = useState('Dewasa');
    const [jumlah_penumpang, setjumlah_Penumpang] = useState(1);
    const [tanggal, setTanggal] = useState('Pilih Tanggal Masuk');
    const [jam, setJam] = useState('Pilih Jam Masuk');
    const [harga, setHarga] = useState();

    const detHarga = (kelas) => {
        let tempHarga;
        setLayanan(kelas);

        if (kelas == 'VIP Class') {
            tempHarga = 200000;
        } else if (kelas == 'First Class') {
            tempHarga = 150000;
        } else if (kelas == 'Business Class') {
            tempHarga = 100000;
        } else if (kelas == 'Economy Class') {
            tempHarga = 50000;
        }

        let totalHarga = tempHarga * jumlah_penumpang;
        setHarga(totalHarga)
    }

    const handleSubmit = () => {
        const pesanan = { pelabuhan_awal, pelabuhan_tujuan, tanggal, jam, layanan, jenis_penumpang, jumlah_penumpang, harga };

        fetch('https://3867-125-167-56-183.ngrok.io/pesanan', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pesanan)
        }).then(() => {
            console.log('new blog add');
        })
    }

    return (
        <View style={styles.container}>

            {/* Menu Pop Up */}
            <Modal transparent visible={popUpPelabuhanAwalVisible} animationType='fade' >
                <PopUpPelabuhanAwal closePopUp={setPopUpPelabuhanAwalVisible} title={popUpTitle} setData={setPelabuhan_awal} />
            </Modal>

            <Modal transparent visible={popUpPelabuhanTujuanVisible} animationType='fade' >
                <PopUpPelabuhanTujuan closePopUp={setPopUpPelabuhanTujuanVisible} title={popUpTitle} setData={setPelabuhan_tujuan} />
            </Modal>

            <Modal transparent visible={popUpKelasVisible} animationType='fade'>
                <PopUpKelas closePopUp={setPopUpKelasVisible} title={popUpTitle} setData={detHarga} />
            </Modal>

            <Modal transparent visible={popUpJenisPenumpangVisible} animationType='fade'>
                <PopUpJenisPenumpang closePopUp={setPopUpJenisPenumpangVisible} title={popUpTitle} setData={setjenis_Penumpang} />
            </Modal>

            <Modal transparent visible={popUpJumlahPenumpangVisible} animationType='fade'>
                <PopUpJumlahPenumpang closePopUp={setPopUpJumlahPenumpangVisible} title={popUpTitle} setData={setjumlah_Penumpang} />
            </Modal>

            {/* Tanggal dan Jam */}
            {showDate && (<DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode='date'
                is24Hour={true}
                display='default'
                onChange={onChangeDate}
            />)}

            {showTime && (<DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode='time'
                is24Hour={true}
                display='default'
                onChange={onChangeTime}
            />)}

            {/* Menu Home Palkapal */}
            <View style={styles.formContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        KAPALZY
                    </Text>
                    <Text style={{ fontSize: 10, }}>
                        By Akbar Maulana 119140151
                    </Text>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Pelabuhan Awal</Text>
                    <View style={styles.inputBoxContainer}>
                        <Fontisto name="ship" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => popUpPelabuhanAwal('Pilih Pelabuhan Awal')}>
                            <Text>{pelabuhan_awal}</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Pelabuhan Tujuan</Text>
                    <View style={styles.inputBoxContainer}>
                        <Fontisto name="ship" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => popUpPelabuhanTujuan('Pilih Pelabuhan Tujuan')}>
                            <Text>{pelabuhan_tujuan}</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Kelas Layanan</Text>
                    <View style={styles.inputBoxContainer}>
                        <MaterialCommunityIcons name="seat-passenger" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => popUpKelas('Pilih Kelas Layanan')}>
                            <Text>{layanan}</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.inputBoxContainer}>
                        <FontAwesome5 name="calendar-alt" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => setShowDate(true)}>
                            <Text>{tanggal}</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputBoxTitle}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.inputBoxContainer}>
                        <FontAwesome5 name="clock" size={30} color="grey" />
                        <Pressable style={styles.inputBox} onPress={() => setShowTime(true)}>
                            <Text>{jam}</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.inputBoxContainer}>
                    <Pressable style={styles.jenisPenumpang} onPress={() => popUpJenisPenumpang('Penumpang')}>
                        <Text>{jenis_penumpang}</Text>
                    </Pressable>

                    <Pressable style={styles.jumlahPenumpang} onPress={() => popUpJumlahPenumpang('Penumpang')}>
                        <Text>{jumlah_penumpang} Orang</Text>
                    </Pressable>
                </View>

                <View style={styles.submitContainer}>
                    <Pressable style={styles.submit} onPress={handleSubmit}>
                        <FontAwesome5 name="search" size={24} color="black" />
                        <Text style={{ fontWeight: 'bold' }}>Buat Tiket</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;