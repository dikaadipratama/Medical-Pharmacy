import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { IconBack, IconMinusGreen, IconPlusGreen } from "../../../../../assets";
import { useFonts } from "expo-font";
import { warnaAbu, warnaUtama } from "../../../../utils";

const ParacetamolKp = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <ScrollView>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate("Home")}
        >
          <IconBack width={22} height={22} />
        </TouchableOpacity>
        <View style={styles.bgFoto}>
          <Image
            source={require("../../../../img/obat/hd/paracetamolKaplet.jpg")}
            style={{ width: 356, height: 215 }}
          />
        </View>

        {/* TEKS UTAMA */}
        <Text style={styles.teksJudul}>Paracetamol</Text>
        <Text style={styles.teksJudul2}>50 kaplet (10 strip @10 Kaplet)</Text>
        <View style={styles.bgHarga}>
          <Text style={styles.teksHarga}>Rp 15.000</Text>
          <View style={styles.bgJumlah}>
            <IconMinusGreen width={12} height={12} />
            <Text style={styles.teksJumlah}>1</Text>
            <IconPlusGreen width={12} height={12} />
          </View>
        </View>

        {/* TENTANG PRODUK */}
        <Text style={styles.teksJudulDesk}>Tentang Produk</Text>
        <Text style={styles.teksIsiDesk}>
          Paracetamol atau asetaminofen adalah obat analgesik dan antipiretik
          yang banyak dipakai untuk meredakan sakit kepala ringan akut, nyeri
          ringan hingga sedang, serta demam. Paracetamol atau acetaminophen
          tersedia dalam bentuk tablet, sirup, tetes, suppositoria, dan infus.
        </Text>

        {/* KOMPOSISI */}
        <Text style={styles.teksJudulDesk2}>Tentang Produk</Text>
        <Text style={styles.teksIsiDesk}>
          Tiap Kaplet mengandung : Paracetamol 500mg.
        </Text>

        {/* DOSIS PEMAKAIAN */}
        <Text style={styles.teksJudulDesk2}>Dosis Pemakaian</Text>
        <Text style={styles.teksIsiDesk}>
          - Dewasa : 1-2 Kaplet, 3-4 kali sehari.
        </Text>
        <Text style={styles.teksIsiDesk2}>
          - Anak-anak 6-12 tahun : 1/2 - 1 Kaplet, 3-4 kali sehari. Atau sesuai
          petunjuk dokter.
        </Text>
      </ScrollView>

      {/* FOOTER */}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.teksFooter}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ParacetamolKp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: "#f9f9f9",
  },
  header: {
    position: "absolute",
    zIndex: 1,
    left: -5,
    top: 23,
  },
  bgFoto: {
    marginHorizontal: -20,
  },
  teksJudul: {
    fontFamily: "LexendBold",
    fontSize: 20,
    paddingVertical: 10,
  },
  teksJudul2: {
    fontFamily: "LexendRegular",
    fontSize: 12,
    color: warnaAbu,
    paddingBottom: 10,
  },
  bgHarga: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  teksHarga: {
    fontFamily: "LexendBold",
    fontSize: 16,
    paddingVertical: 10,
  },
  bgJumlah: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: warnaAbu,
  },
  teksJumlah: {
    fontFamily: "LexendRegular",
    paddingHorizontal: 20,
    fontSize: 16,
  },
  teksJudulDesk: {
    fontFamily: "LexendBold",
    fontSize: 16,
  },
  teksIsiDesk: {
    fontFamily: "LexendRegular",
    fontSize: 14,
    textAlign: "justify",
    paddingTop: 5,
  },
  teksIsiDesk2: {
    fontFamily: "LexendRegular",
    fontSize: 14,
    textAlign: "justify",
    paddingBottom: 20,
  },
  teksJudulDesk2: {
    fontFamily: "LexendBold",
    fontSize: 16,
    paddingTop: 15,
  },
  footer: {
    backgroundColor: warnaUtama,
    padding: 20,
    marginHorizontal: -20,
  },
  teksFooter: {
    fontFamily: "LexendBold",
    color: "white",
    textAlign: "center",
  },
});
