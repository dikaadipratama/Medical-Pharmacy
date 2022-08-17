import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useFonts } from "expo-font";
import {
  IconStar,
  IconRute,
  IconSave,
  IconStart,
  IconTelp,
} from "../../../assets";
import { warnaAbu, warnaUtama } from "../../utils";

const Lokasi = () => {
  const [loaded] = useFonts({
    LexendRegular: require("../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.9813644055076916,
          longitude: 110.39243834795656,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <Marker
          coordinate={{
            latitude: -6.9813644055076916,
            longitude: 110.39243834795656,
          }}
        />
      </MapView>

      {/* DESKRIPSI */}
      <View style={styles.containerDesk}>
        <Text style={styles.teksJudul}>PT. Medhika Prathama</Text>
        <View style={styles.boxTeks}>
          <Text style={styles.teksRating}>4,8</Text>
          <View style={styles.icon}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </View>
          <Text style={styles.teksRating}>(175)</Text>
        </View>
        <Text style={styles.teksRating}>Apotek</Text>
        <View style={styles.bgTeksJam}>
          <Text style={styles.teksJam}>Buka</Text>
          <Text style={styles.teksRating}>- Bisa beda saat liburan</Text>
        </View>

        <ScrollView horizontal>
          {/* BUTTON */}
          <View style={styles.btn}>
            <TouchableOpacity style={styles.boxBtn}>
              <IconRute width={17} height={17} />
              <Text style={styles.teksRute}>Rute</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconMulai}>
              <IconStart width={17} height={17} />
              <Text style={styles.teksMulai}>Mulai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTelp}>
              <IconTelp width={17} height={17} />
              <Text style={styles.teksTelp}>Telepon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconSimpan}>
              <IconSave width={17} height={17} />
              <Text style={styles.teksSimpan}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Lokasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  containerDesk: {
    backgroundColor: "white",
    position: "absolute",
    paddingLeft: 20,
    paddingVertical: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.85,
    shadowRadius: 17.49,

    elevation: 12,
  },
  teksJudul: {
    fontFamily: "LexendRegular",
    fontSize: 17,
    paddingBottom: 5,
  },
  boxTeks: {
    flexDirection: "row",
    alignItems: "center",
  },
  teksRating: {
    fontFamily: "LexendRegular",
    color: warnaAbu,
  },
  icon: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  bgTeksJam: {
    flexDirection: "row",
  },
  teksJam: {
    fontFamily: "LexendRegular",
    color: warnaUtama,
  },
  btn: {
    flexDirection: "row",
    marginTop: 10,
    paddingRight: 20,
  },
  boxBtn: {
    backgroundColor: warnaUtama,
    borderRadius: 20,
    padding: 12,
    width: "19%",
    flexDirection: "row",
    justifyContent: "center",
  },
  teksRute: {
    color: "white",
    fontFamily: "LexendRegular",
    paddingLeft: 5,
  },
  iconMulai: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    marginLeft: 10,
    width: "22%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: warnaAbu,
    justifyContent: "center",
  },
  teksMulai: {
    color: warnaUtama,
    fontFamily: "LexendRegular",
    paddingLeft: 5,
  },
  iconTelp: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    width: "26%",
    marginLeft: 10,
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: warnaAbu,
  },
  teksTelp: {
    color: warnaUtama,
    fontFamily: "LexendRegular",
    paddingLeft: 5,
  },
  iconSimpan: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    marginLeft: 10,
    width: "27%",
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: warnaAbu,
  },
  teksSimpan: {
    color: warnaUtama,
    fontFamily: "LexendRegular",
    paddingLeft: 5,
  },
});
