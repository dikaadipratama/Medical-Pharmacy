import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  IconHome,
  IconHomeAct,
  IconObat,
  IconObatAct,
  IconMapsAct,
  IconMaps,
  IconApp,
  IconAppAct,
} from "../../../assets";
import { warnaUtama, warnaAbu } from "../../utils";
import { useFonts } from "expo-font";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Icon = () => {
    if (label === "Home")
      return isFocused ? (
        <IconHomeAct width={23} height={23} />
      ) : (
        <IconHome width={23} height={23} />
      );

    if (label === "Obat")
      return isFocused ? (
        <IconObatAct width={23} height={23} />
      ) : (
        <IconObat width={23} height={23} />
      );

    if (label === "Lokasi")
      return isFocused ? (
        <IconMapsAct width={23} height={23} />
      ) : (
        <IconMaps width={23} height={23} />
      );

    if (label === "Aplikasi")
      return isFocused ? (
        <IconAppAct width={23} height={23} />
      ) : (
        <IconApp width={23} height={23} />
      );

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
      <Text style={styles.teks(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  teks: (isFocused) => ({
    color: isFocused ? warnaUtama : warnaAbu,
    marginTop: 6,
    fontSize: isFocused ? 14 : 13,
    fontFamily: isFocused ? "LexendBold" : "LexendRegular",
  }),
});
