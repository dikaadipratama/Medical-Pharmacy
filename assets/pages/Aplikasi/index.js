import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { warnaPutih, warnaUtama } from "../../utils";
import { IconUtamaWhite } from "../../../assets";

const Aplikasi = () => {
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
        <Image source={IconUtamaWhite} style={{ width: 200, height: 20 }} />
      </View>

      {/* BAGIAN UTAMA */}
      <ScrollView>
        <Text style={styles.teksHeader}>Tentang Kami</Text>

        {/* SEJARAH */}
        <Text style={styles.teksSejarah}>Sejarah</Text>
        <Text style={styles.isiTeks}>
          MedicalPharmacy merupakan sebuah perusahaan teknologi asal Indonesia
          yang melayani di bidang kesehatan, dan didirikan pada tahun 2022 di
          Surakarta oleh PT Medika Prathama. MedicalPharmacy melayani pembelian
          obat, serta melakukan pemeriksaan laboratorium lewat smarthphone kapan
          saja dan dimana saja selama 24 jam. Tujuan MedicalPharmacy adalah
          simplifying healthcare, yakni memudahkan akses kesehatan bagi seluruh
          masyarakat Indonesia.
        </Text>

        {/* PROFIL */}
        <Text style={styles.teksJudul}>Profil</Text>
        <Text style={styles.isiTeks}>
          MedicalPharmacy merupakan perusahaan obat terkemuka di Indonesia yang
          berupa aplikasi. MedicalPharmacy meluncurkan platform Alomedia yang
          ditunjukkan bagi para dokter. Layanan kesehatan berbasis digital yang
          ditawarkan oleh MedicalPharmacy antara lain adalah fitur chat, membuat
          janji dengan dokter, e-pharmacy, informasi atau artikel kesehatan,
          hingga proteksi kesehatan. Sejak April 2022, MedicalPharmacy mendukung
          Kementrian Kesehatan Republik Indonesia (KemenKes RI) dalam memberikan
          program layanan kesehatan khusus berupa pendampingan melalui
          telekonsultasi dokter pribadi gratis bagi pasien COVID-19 yang sedang
          menjalani isolasi mandiri.
        </Text>

        {/* VISI MISI */}
        <Text style={styles.teksJudul}>Visi Misi</Text>
        <Text style={styles.isiVisi}>
          MedicalPharmacy memiliki Visi menjadi pendamping perawatan kesehatan
          digital terpercaya. Sedangkan Misi nya adalah mempermudah akses
          perawatan kesehatan melalui teknologi.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Aplikasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: warnaPutih,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    backgroundColor: warnaUtama,
    alignItems: "center",
    padding: 25,
    marginHorizontal: -20,
  },
  teksHeader: {
    fontFamily: "LexendBold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
  },
  teksSejarah: {
    fontFamily: "LexendBold",
    fontSize: 18,
    marginTop: 30,
  },
  isiTeks: {
    fontFamily: "LexendRegular",
    textAlign: "justify",
    fontSize: 15,
  },
  teksJudul: {
    fontFamily: "LexendBold",
    fontSize: 18,
    marginTop: -5,
  },
  isiVisi: {
    fontFamily: "LexendRegular",
    textAlign: "justify",
    fontSize: 15,
    paddingBottom: 20,
  },
});
