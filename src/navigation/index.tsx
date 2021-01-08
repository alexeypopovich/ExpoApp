import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Lookup, QRScan } from "../screens";
import { Ionicons } from '@expo/vector-icons';
import {Colors} from "../styling";
import { TransactionDetails } from "../screens/TransactionDetails";
import { DETAILS, LOOKUP, MAIN, QRSCAN } from "../constants/screens";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }: { color: string, size: number }) => {
                switch (route.name) {
                    case 'Lookup':
                        return <Ionicons name="search-outline" size={size} color={color} />;
                    case 'QRScan':
                        return <Ionicons name="qr-code-outline" size={size} color={color} />;
                    default:
                        return <Ionicons name="home" size={size} color={color} />;
                }
            },
        })}
        tabBarOptions={{
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.inactiveGray,
            style: { backgroundColor: Colors.black, paddingHorizontal: 10 },
        }}>
        <Tab.Screen name={LOOKUP} component={Lookup} />
        <Tab.Screen name={QRSCAN} component={QRScan} />
    </Tab.Navigator>
)

export const NavigationStack = () => (
    <MainStack.Navigator headerMode="none">
        <MainStack.Screen name={MAIN} component={Tabs} />
        <MainStack.Screen name={DETAILS} component={TransactionDetails} />
    </MainStack.Navigator>

)
