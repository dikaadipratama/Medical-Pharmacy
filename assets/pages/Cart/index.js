import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  IconBack,
  IconHapus,
  IconMinusGreenFull,
  IconPlusGreenFull,
} from "../../../assets";
import { useFonts } from "expo-font";
import { warnaUtama } from "../../utils";

const Cart = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("ParacetamolKp")}
      >
        <IconBack />
        <Text style={styles.teksHeader}>Cart Items</Text>
      </TouchableOpacity>

      {/* ADD */}
      <TouchableOpacity>
        <Text style={styles.teksAddItem}>Add More Items</Text>
      </TouchableOpacity>

      {/* ITEM */}
      <View style={styles.boxItem}>
        <Image
          source={require("../../img/obat/hd/paracetamolKaplet.jpg")}
          style={styles.gambarItem}
        />
        <View style={styles.boxTeks}>
          <Text style={styles.teksJudul}>Paracetamol</Text>
          <Text style={styles.teksIsi}>50 kaplet</Text>
          <Text style={styles.teksIsi}>15.000</Text>
          <TouchableOpacity style={styles.iconDel}>
            <IconHapus />
          </TouchableOpacity>

          {/* TOTAL */}
          <View style={styles.boxTotal}>
            <TouchableOpacity>
              <Image
                source={IconMinusGreenFull}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <Text style={styles.teksJumlah}>1</Text>
            <TouchableOpacity>
              <Image
                source={IconPlusGreenFull}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.bgFooter}>
          <View>
            <Text style={styles.teksFooter1}>Total Pembayaran</Text>
            <Text style={styles.teksFooter2}>15.000</Text>
          </View>
          <TouchableOpacity
            style={styles.bgNext}
            onPress={() => navigation.navigate("Order")}
          >
            <Text style={styles.teksNext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 45,
    backgroundColor: "#f9f9f9",
  },
  header: {
    width: "65%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  teksHeader: {
    fontSize: 17,
    fontFamily: "LexendBold",
  },
  teksAddItem: {
    textAlign: "right",
    marginTop: 30,
    fontSize: 14,
    fontFamily: "LexendBold",
    color: warnaUtama,
  },
  boxItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    marginTop: 10,
    flexDirection: "row",
    padding: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.65,
    shadowRadius: 10.49,

    elevation: 10,
  },
  gambarItem: {
    width: "50%",
    height: 100,
  },
  boxTeks: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  teksJudul: {
    fontFamily: "LexendBold",
    fontSize: 14,
  },
  teksIsi: {
    fontFamily: "LexendRegular",
    fontSize: 13,
  },
  iconDel: {
    position: "absolute",
    right: -40,
    top: 27,
  },
  boxTotal: {
    position: "absolute",
    flexDirection: "row",
    right: -40,
    bottom: 0,
  },
  teksJumlah: {
    fontFamily: "LexendBold",
    paddingHorizontal: 10,
  },
  footer: {
    marginHorizontal: -20,
  },
  bgFooter: {
    backgroundColor: "white",
    padding: 15,
    width: "100%",
    position: "absolute",
    top: 442,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teksFooter1: {
    fontFamily: "LexendBold",
  },
  teksFooter2: {
    fontFamily: "LexendBold",
    color: warnaUtama,
  },
  bgNext: {
    backgroundColor: warnaUtama,
    padding: 10,
    width: "30%",
    borderRadius: 25,
  },
  teksNext: {
    fontFamily: "LexendBold",
    color: "white",
    textAlign: "center",
  },
});
