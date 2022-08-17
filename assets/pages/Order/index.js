import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { OnBoardingke3, IconCheck } from "../../../assets";
import { useFonts } from "expo-font";
import { warnaUtama } from "../../utils";

const Order = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      {/* STATUS BAR */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={warnaUtama}
        translucent
      />

      <View style={styles.header}>
        <Text style={styles.teksHeader}>Order Confirm</Text>
      </View>

      {/* GAMBAR */}
      <View style={styles.container}>
        <Image source={OnBoardingke3} style={styles.img} />
        <View style={styles.bgTeks}>
          <Text style={styles.teks}>
            Your order has been placed successfully
          </Text>
          <Text style={styles.teks}>and will be on the way soon.</Text>
        </View>

        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate("MainApp")}
        >
          <IconCheck width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: warnaUtama,
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  teksHeader: {
    fontFamily: "LexendBold",
    color: "white",
    fontSize: 17,
  },
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  img: {
    width: 354,
    height: 235,
  },
  bgTeks: {
    marginTop: 40,
    alignItems: "center",
  },
  teks: {
    fontSize: 15,
    fontFamily: "LexendBold",
  },
  icons: {
    backgroundColor: warnaUtama,
    padding: 10,
    marginTop: 80,
    borderRadius: 20,
    width: "14%",
    alignItems: "center",
  },
});
