import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { IconBack, IconMinusGreen, IconPlusGreen } from "../../../../assets";
import { useFonts } from "expo-font";
import { warnaAbu, warnaUtama } from "../../../utils";

const AmoxicillinSrp = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <ScrollView>
        <TouchableOpacity
          style={{
            position: "absolute",
            zIndex: 1,
            left: -5,
            top: 23,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <IconBack width={22} height={22} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: -20 }}>
          <Image
            source={require("../../../img/obat/hd/amoxicillinSirup.jpg")}
            style={{ width: 356, height: 215 }}
          />
        </View>

        {/* TEKS UTAMA */}
        <Text
          style={{
            fontFamily: "LexendBold",
            fontSize: 20,
            paddingVertical: 10,
          }}
        >
          Amoxicillin
        </Text>
        <Text
          style={{
            fontFamily: "LexendRegular",
            fontSize: 12,
            color: warnaAbu,
            paddingBottom: 10,
          }}
        >
          60 ml
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "LexendBold",
              fontSize: 16,
              paddingVertical: 10,
            }}
          >
            Rp 15.000
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: warnaAbu,
            }}
          >
            <IconMinusGreen width={12} height={12} />
            <Text
              style={{
                fontFamily: "LexendRegular",
                paddingHorizontal: 20,
                fontSize: 16,
              }}
            >
              1
            </Text>
            <IconPlusGreen width={12} height={12} />
          </View>
        </View>

        {/* TENTANG PRODUK */}
        <Text style={{ fontFamily: "LexendBold", fontSize: 16 }}>
          Tentang Produk
        </Text>
        <Text
          style={{
            fontFamily: "LexendRegular",
            fontSize: 14,
            color: warnaAbu,
            textAlign: "justify",
            paddingTop: 5,
          }}
        >
          Paracetamol atau asetaminofen adalah obat analgesik dan antipiretik
          yang banyak dipakai untuk meredakan sakit kepala ringan akut, nyeri
          ringan hingga sedang, serta demam. Paracetamol atau acetaminophen
          tersedia dalam bentuk tablet, sirup, tetes, suppositoria, dan infus.
        </Text>

        {/* KOMPOSISI */}
        <Text
          style={{ fontFamily: "LexendBold", fontSize: 16, paddingTop: 15 }}
        >
          Tentang Produk
        </Text>
        <Text
          style={{
            fontFamily: "LexendRegular",
            fontSize: 14,
            color: warnaAbu,
            textAlign: "justify",
            paddingTop: 5,
          }}
        >
          Tiap Kaplet mengandung : Paracetamol 500mg.
        </Text>

        {/* DOSIS PEMAKAIAN */}
        <Text
          style={{ fontFamily: "LexendBold", fontSize: 16, paddingTop: 15 }}
        >
          Dosis Pemakaian
        </Text>
        <Text
          style={{
            fontFamily: "LexendRegular",
            fontSize: 14,
            color: warnaAbu,
            textAlign: "justify",
            paddingTop: 5,
          }}
        >
          - Dewasa : 1-2 Kaplet, 3-4 kali sehari.
        </Text>
        <Text
          style={{
            fontFamily: "LexendRegular",
            fontSize: 14,
            color: warnaAbu,
            textAlign: "justify",
            paddingBottom: 20,
          }}
        >
          - Anak-anak 6-12 tahun : 1/2 - 1 Kaplet, 3-4 kali sehari. Atau sesuai
          petunjuk dokter.
        </Text>
      </ScrollView>

      {/* FOOTER */}
      <TouchableOpacity
        style={{
          backgroundColor: warnaUtama,
          padding: 20,
          marginHorizontal: -20,
        }}
      >
        <Text
          style={{
            fontFamily: "LexendBold",
            color: "white",
            textAlign: "center",
          }}
        >
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmoxicillinSrp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: "#f9f9f9",
  },
});
