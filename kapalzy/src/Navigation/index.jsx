import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Modal, Pressable, Text, StyleSheet } from "react-native";

import HomeScreen from "../Screens/HomeScreen";
import PemesananScreen from "../Screens/PemesananScreen";
import PembatalanScreen from "../Screens/PembatalanScreen";
import LainnyaScreen from "../Screens/LainnyaScreen";

const Navigation = () => {

    const homeName = 'Home';
    const pemesananName = 'Pemesanan';
    const pembatalanName = 'Pembatalan';
    const lainnyaName = 'Lainnya';

    const [popUpVisible, setPopUpVisible] = useState(false);

    const popUp = () => {
        setPopUpVisible(true);
    }

    const tab = createBottomTabNavigator();

    return (
        <NavigationContainer>

            <Modal transparent visible={popUpVisible} animationType='fade'>
                <LainnyaScreen closePopUp={setPopUpVisible} />
            </Modal>

            <tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        let routeName = route.name;

                        if (routeName === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (routeName === pemesananName) {
                            iconName = focused ? 'book' : 'book-outline'
                        } else if (routeName === pembatalanName) {
                            iconName = focused ? 'close-circle' : 'close-circle-outline'
                        }

                        return <Ionicons name={iconName} size={30} color={color} />
                    },
                    tabBarLabelStyle: {
                        paddingBottom: 5,
                        fontSize: 10,
                    },
                    tabBarStyle: {
                        padding: 5,
                        height: 55,

                    },
                    tabBarActiveTintColor: '#00578a',
                    tabBarInactiveTintColor: '#00578a',
                })}

            >

                <tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
                <tab.Screen name={pemesananName} component={PemesananScreen} options={{ headerShown: false }} />
                <tab.Screen name={pembatalanName} component={PembatalanScreen} options={{ headerShown: false }} />
                <tab.Screen name={lainnyaName} component={LainnyaScreen} options={({
                    headerShown: false,
                    tabBarButton: () => (
                        <Pressable style={styles.lainnyaButton} onPress={() => popUp()}>
                            <Ionicons name='list' size={30} color='#00578a' />
                            <Text style={styles.lainnyaButtonText}>Lainnya</Text>
                        </Pressable>),
                })} />

            </tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    lainnyaButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 30,
        paddingLeft: 20,
        paddingBottom: 5
    },
    lainnyaButtonText: {
        fontSize: 10,
        color: '#00578a'
    },
});

export default Navigation;