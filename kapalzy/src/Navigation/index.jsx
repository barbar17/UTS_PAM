import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screens/HomeScreen";
import PemesananScreen from "../Screens/PemesananScreen";
import PembatalanScreen from "../Screens/PembatalanScreen";

const Navigation = () => {

    const homeName = 'Home';
    const pemesananName = 'Pemesanan';
    const pembatalanName = 'Pembatalan';
    const lainnyaName = 'Lainnya';

    const tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
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
                        } else if (routeName === lainnyaName) {
                            iconName = focused ? 'list' : 'list-outline'
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
                    }
                })}

            >


                <tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
                <tab.Screen name={pemesananName} component={PemesananScreen} options={{ headerShown: false }} />
                <tab.Screen name={pembatalanName} component={PembatalanScreen} options={{ headerShown: false }} />
                <tab.Screen name={lainnyaName} component={PembatalanScreen} options={{ headerShown: false }} />

            </tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;