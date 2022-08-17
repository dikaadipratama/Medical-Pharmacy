import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { IconBackWhite } from "../../../assets";
import { useFonts } from "expo-font";
import { warnaUtama } from "../../utils";

const Berita = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendRegular: require("../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <IconBackWhite width={22} height={22} style={{ left: 15 }} />
          </TouchableOpacity>
          <Text style={styles.teksHeader}>Detail Berita</Text>
        </View>
      </View>

      {/* GAMBAR */}
      <View style={styles.gambar}>
        <Image
          source={require("../../img/ImgHome.png")}
          style={{ width: 388, height: 165 }}
        />
      </View>

      <ScrollView>
        {/* TEKS UTAMA */}
        <Text style={styles.teksJudul}>Apa Itu Paracetamol?</Text>
        <Text style={styles.teksIsi}>
          Paracetamol merupakan jenis obat yang banyak digunakan dalam dunia
          medis. Obat ini pertama kalinya digunakan secara klinis oleh von
          Mering pada tahun 1893, paracetamol tidak dijual secara komersial
          hingga tahun 1950 di Amerika Serikat dan 1956 in Australia. Obat ini
          populer karena memiliki efektivitas yang baik dengan profil keamanan
          yang konsisten. Penggunaannya sebagai analgesik dan antipiretik pada
          anak-anak juga menjadi pilihan sejak terbuktinya ada hubungan antara
          aspirin dan sindrom Reye.
        </Text>

        {/* MANFAAT */}
        <Text style={styles.TeksJudul2}>Manfaat Paracetamol</Text>
        <Text style={styles.teksIsi}>
          Paracetamol sebagai antipiretik (penurun panas) dan analgesik (pereda
          nyeri). Obat ini bisa digunakan untuk pasien dewasa maupun pasien
          anak. Acetaminophen juga merupakan pilihan pertama pereda nyeri ibu
          hamil dan ibu menyusui. Paracetamol bekerja dengan cara menghalangi
          reaksi kimia di otak yang menyampaikan sinyal rasa sakit. Paracetamol
          juga mengurangi demam dengan cara mengintervensi sinyal di otak yang
          mengatur temperatur tubuh. Perlu dicatat, obat ini hanya berfungsi
          untuk meredakan gejala, bukan untuk mengatasi penyebab utama yang
          memicu demam dan nyeri yang dirasakan.
        </Text>

        {/* JENIS */}
        <Text style={styles.TeksJudul2}>Jenis-Jenis Paracetamol</Text>
        <Text style={styles.teksIsi}>
          Berikut ini adalah jenis-jenis paracetamol yang bisa ditemukan di
          apotik:
        </Text>
        <Text style={styles.teksIsi}>
          - Jenis tablet, contoh mereknya: Emkamol, Pyrexin, Procet, Erlamol,
          Ekacetol, Trimol, Itramol, Metamol, Sanmol, Sumagesic, Pamol.
        </Text>
        <Text style={styles.teksIsi}>
          - Jenis kaplet, contoh mereknya: Bufadol, Trifamol.
        </Text>
        <Text style={styles.teksIsi}>
          - Jenis sirop, contoh mereknya: Sanmol, Pamol, Afitamol, Trifamol,
          Turpas, Tempra, Erphamol.
        </Text>

        {/* DOSIS PEMAKAIAN */}
        <Text style={styles.TeksJudul2}>
          Dosis dan Aturan Pakai Paracetamol
        </Text>
        <Text style={styles.teksIsi}>
          - Dewasa : 1-2 Kaplet, 3-4 kali sehari.
        </Text>
        <Text style={styles.teksLast}>
          - Anak-anak 6-12 tahun : 1/2 - 1 Kaplet, 3-4 kali sehari. Atau sesuai
          petunjuk dokter.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: warnaUtama,
    paddingVertical: 15,
    marginHorizontal: -20,
  },
  container: {
    flexDirection: "row",
    width: "66%",
    justifyContent: "space-between",
  },
  teksHeader: {
    fontFamily: "LexendBold",
    color: "white",
    fontSize: 17,
  },
  gambar: {
    marginHorizontal: -20,
    alignItems: "center",
  },
  teksJudul: {
    fontFamily: "LexendBold",
    fontSize: 18,
    paddingTop: 10,
  },
  TeksJudul2: {
    fontFamily: "LexendBold",
    fontSize: 18,
    marginTop: -10,
  },
  teksIsi: {
    fontFamily: "LexendRegular",
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 23,
  },
  teksLast: {
    fontFamily: "LexendRegular",
    fontSize: 14,
    textAlign: "justify",
    paddingBottom: 20,
    lineHeight: 23,
  },
});
