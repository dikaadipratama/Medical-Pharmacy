import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { warnaAbu2, warnaAbu, warnaPutih, warnaUtama } from "../../utils";
import { useFonts } from "expo-font";
import {
  IconUtama,
  ImgLogin,
  IconArrowLogin,
  IconLineLogin,
} from "../../../assets";

const Login = ({ navigation }) => {
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
        <Image source={IconUtama} style={styles.imgHeader1} />
        <Image source={ImgLogin} style={styles.imgHeader2} />
      </View>

      {/* TEKS */}
      <View style={styles.teksNo}>
        <Text style={styles.teksNum}>Enter your phone</Text>
        <Text style={styles.teksNum}>number</Text>
      </View>

      {/* INPUT */}
      <View style={styles.containerInput}>
        <View style={styles.boxTeksInput}>
          <Text style={styles.teksInput}>+62</Text>
        </View>
        <View style={styles.icon}>
          <IconArrowLogin style={styles.icons} />
          <IconLineLogin style={styles.icons} />
        </View>
        <TextInput placeholder="Enter your phone number" style={styles.nomer} />
      </View>
      <View style={styles.teks2}>
        <Text style={styles.teksBiasa}>Have a </Text>
        <Text style={styles.teksBold}>Email / Password </Text>
        <Text style={styles.teksBiasa}>Account?</Text>
      </View>
      <Text style={styles.teks3}>
        By clicking continue, you agree with our Privacy Policy
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("MainApp")}
      >
        <Text style={styles.btnTeks}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: warnaPutih,
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  header: {
    alignItems: "center",
  },
  imgHeader1: {
    width: 200,
    height: 42,
  },
  imgHeader2: {
    width: 201,
    height: 313,
    marginTop: 30,
  },
  teksNo: {
    paddingTop: 20,
  },
  teksNum: {
    fontFamily: "LexendBold",
    color: warnaUtama,
    fontSize: 24,
  },
  containerInput: {
    backgroundColor: warnaAbu2,
    padding: 12,
    marginTop: 20,
    flexDirection: "row",
    borderRadius: 12,
  },
  boxTeksInput: {
    justifyContent: "center",
  },
  teksInput: {
    fontFamily: "LexendRegular",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  nomer: {
    fontFamily: "LexendRegular",
    marginLeft: 10,
    width: "70%",
    color: warnaAbu,
  },
  teks2: {
    flexDirection: "row",
    paddingTop: 15,
  },
  teksBiasa: {
    fontFamily: "LexendRegular",
    fontSize: 13,
  },
  teksBold: {
    fontFamily: "LexendBold",
    fontSize: 13,
  },
  teks3: {
    fontFamily: "LexendRegular",
    fontSize: 12,
    color: warnaAbu,
    marginTop: 20,
  },
  btn: {
    backgroundColor: warnaUtama,
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  btnTeks: {
    color: "white",
    fontFamily: "LexendBold",
    fontSize: 15,
    textAlign: "center",
  },
  icons: {
    marginLeft: 10,
  },
});
