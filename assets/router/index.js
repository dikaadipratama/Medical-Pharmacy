import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Aplikasi,
  Obat,
  Lokasi,
  Splash,
  Login,
  Berita,
  Cart,
  Order,
  ParacetamolKp,
  OnBoarding1,
  OnBoarding2,
  OnBoarding3,
} from "../pages";
import { BottomNavigator } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Obat"
        component={Obat}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Lokasi"
        component={Lokasi}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Aplikasi"
        component={Aplikasi}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Berita"
        component={Berita}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ParacetamolKp"
        component={ParacetamolKp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoarding1"
        component={OnBoarding1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoarding2"
        component={OnBoarding2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoarding3"
        component={OnBoarding3}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
