import { StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { splashBg } from "../../../assets";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnBoarding1");
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={splashBg} style={styles.bg}></ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
