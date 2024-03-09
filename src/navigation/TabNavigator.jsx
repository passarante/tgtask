import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ChatScreen from "./../screens/chat/ChatScreen";
import AddTaskScreen from "./../screens/task/AddTaskScreen";
import CalendarScreen from "./../screens/calendar/CalendarScreen";
import NotificationScreen from "./../screens/notification/NotificationScreen";
import { COLORS } from "./../constants/index";
import {
  AddSquare,
  Calendar,
  Home2,
  Messages1,
  Notification1,
} from "iconsax-react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.tabBackground, height: 80 },
        tabBarActiveTintColor: COLORS.textPrimary,
        tabBarInactiveTintColor: COLORS.text,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Home2 color={color} size={24} />
                <Text
                  style={{
                    color: focused ? COLORS.textPrimary : COLORS.text,
                    fontSize: 10,
                    marginTop: 3,
                  }}
                >
                  Anasayfa
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Messages1 color={color} size={24} />
                <Text
                  style={{
                    color: focused ? COLORS.textPrimary : COLORS.text,
                    fontSize: 10,
                    marginTop: 3,
                  }}
                >
                  Sohbet
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.btnPrimary,
                  height: 54,
                  width: 54,
                  marginBottom: focused ? 70 : 0,
                  borderRadius: focused ? 50 : 3,
                }}
              >
                <AddSquare color={COLORS.primary} size={24} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Calendar color={color} size={24} />
                <Text
                  style={{
                    color: focused ? COLORS.textPrimary : COLORS.text,
                    fontSize: 10,
                    marginTop: 3,
                  }}
                >
                  Takvim
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Notification1 color={color} size={24} />
                <Text
                  style={{
                    color: focused ? COLORS.textPrimary : COLORS.text,
                    fontSize: 10,
                    marginTop: 3,
                  }}
                >
                  Bildirimler
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
