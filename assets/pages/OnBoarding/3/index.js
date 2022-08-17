import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { OnBoardingke3, IconBoarding3 } from "../../../../assets";
import { useFonts } from "expo-font";
import { warnaAbu, warnaUtama } from "../../../utils";

const OnBoarding3 = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image source={OnBoardingke3} style={styles.imgHeader} />
      </View>
      <View style={styles.boxTeks}>
        <Text style={styles.teks}>24 hours at</Text>
        <Text style={styles.teks}>your service.</Text>
        <Text style={styles.teksDesk}>
          Kami memberikan layanan 24 jam untuk memudahkan akses kesehatan
          masyarakat
        </Text>
      </View>

      {/* ICON */}
      <View style={styles.bgIcon}>
        <Image source={IconBoarding3} style={styles.icon} />
      </View>

      {/* BUTTON */}
      <View style={styles.bgBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.teksBtn}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.teksBtn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    paddingTop: 50,
  },
  imgHeader: {
    width: 354,
    height: 235,
  },
  boxTeks: {
    paddingTop: 40,
  },
  teks: {
    fontSize: 22,
    fontFamily: "LexendBold",
    textAlign: "center",
  },
  teksDesk: {
    fontSize: 16,
    fontFamily: "LexendRegular",
    textAlign: "center",
    color: warnaAbu,
    paddingTop: 20,
  },
  bgIcon: {
    alignItems: "center",
    paddingTop: 40,
  },
  icon: {
    width: 31,
    height: 7,
  },
  bgBtn: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 20,
    flexDirection: "row",
  },
  btn: {
    backgroundColor: warnaUtama,
    borderRadius: 25,
    padding: 10,
    width: "20%",
  },
  teksBtn: {
    color: "white",
    fontFamily: "LexendRegular",
    textAlign: "center",
  },
});
