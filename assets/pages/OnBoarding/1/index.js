import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { OnBoardingke1, IconBoarding1 } from "../../../../assets";
import { useFonts } from "expo-font";
import { warnaAbu, warnaUtama } from "../../../utils";

const OnBoarding1 = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <View style={styles.bgImg}>
        <Image source={OnBoardingke1} style={styles.img} />
      </View>
      <View style={styles.boxTeks}>
        <Text style={styles.teksUtama}>Medika Farma</Text>
        <Text style={styles.teksUtama}>Mobile.</Text>
        <Text style={styles.teksDesk}>
          Solusi kesehatan terlengkap yang kamu butuhkan ada dalam genggaman.
          Menyediakan berbagai kebutuhan obat-obatan tersertifikasi BPOM dan MUI
        </Text>
      </View>

      {/* ICON */}
      <View style={styles.icon}>
        <Image source={IconBoarding1} style={styles.icons} />
      </View>

      {/* BUTTON */}
      <View style={styles.boxBtn}>
        <TouchableOpacity
          style={styles.bgBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.teksBtn}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bgBtn}
          onPress={() => navigation.navigate("OnBoarding2")}
        >
          <Text style={styles.teksBtn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  bgImg: {
    alignItems: "center",
    paddingTop: 50,
  },
  img: {
    width: 242,
    height: 242,
  },
  boxTeks: {
    paddingTop: 40,
  },
  teksUtama: {
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
  icon: {
    alignItems: "center",
    paddingTop: 40,
  },
  boxBtn: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 20,
    flexDirection: "row",
  },
  bgBtn: {
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
  icons: {
    width: 31,
    height: 7,
  },
});
