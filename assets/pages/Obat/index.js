import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  warnaHitam,
  warnaBox,
  warnaPutih,
  warnaUtama,
  warnaAbu,
} from "../../utils";
import { useFonts } from "expo-font";
import {
  IconUtama,
  IconSearch,
  paracetamolKaplet,
  paracetamolSirup,
  amoxicillinKapsul,
  amoxicillinSirup,
  ampicillinKaplet,
  clarixinTablet,
  ferbionKapsul,
  loratadineTablet,
  novachlorKapsul,
  novachlorSirup,
  novafloxTablet,
  novamoxSirup,
  novapenKaplet,
  tetracyclineKapsul,
  thiamexKapsul,
} from "../../../assets";
import { Card } from "react-native-paper";

const listTab = [
  {
    status: "All",
  },
  {
    status: "Kapsul",
  },
  {
    status: "Tablet",
  },
  {
    status: "Sirup",
  },
  {
    status: "Kaplet",
  },
];

const obatFull = [
  {
    id: "1",
    nama: "Paracetamol",
    isi: "50 kaplet",
    foto: paracetamolKaplet,
    status: "Kaplet",
  },
  {
    id: "2",
    nama: "Amoxicillin",
    isi: "60 ml",
    foto: amoxicillinSirup,
    status: "Sirup",
  },
  {
    id: "3",
    nama: "Clarixin",
    isi: "12 tablet",
    foto: clarixinTablet,
    status: "Tablet",
  },
  {
    id: "4",
    nama: "Amoxicillin",
    isi: "12 kapsul",
    foto: amoxicillinKapsul,
    status: "Kapsul",
  },
  {
    id: "5",
    nama: "Ampicillin",
    isi: "12 kaplet",
    foto: ampicillinKaplet,
    status: "Kaplet",
  },
  {
    id: "6",
    nama: "Ferbion",
    isi: "12 kapsul",
    foto: ferbionKapsul,
    status: "Kapsul",
  },
  {
    id: "7",
    nama: "Loratadine",
    isi: "12 tablet",
    foto: loratadineTablet,
    status: "Tablet",
  },
  {
    id: "8",
    nama: "Novachlor",
    isi: "12 kapsul",
    foto: novachlorKapsul,
    status: "Kapsul",
  },
  {
    id: "9",
    nama: "Novachlor",
    isi: "60 ml",
    foto: novachlorSirup,
    status: "Sirup",
  },
  {
    id: "10",
    nama: "Novaflox",
    isi: "12 tablet",
    foto: novafloxTablet,
    status: "Tablet",
  },
  {
    id: "11",
    nama: "Novamox",
    isi: "60 ml",
    foto: novamoxSirup,
    status: "Sirup",
  },
  {
    id: "12",
    nama: "Novapen",
    isi: "12 kaplet",
    foto: novapenKaplet,
    status: "Kaplet",
  },
  {
    id: "13",
    nama: "Paracetamol",
    isi: "60 ml",
    foto: paracetamolSirup,
    status: "Sirup",
  },
  {
    id: "14",
    nama: "Tetracycline",
    isi: "12 kapsul",
    foto: tetracyclineKapsul,
    status: "Kapsul",
  },
  {
    id: "15",
    nama: "Thiamex",
    isi: "12 kapsul",
    foto: thiamexKapsul,
    status: "Kapsul",
  },
];

const Obat = ({ navigation }) => {
  const [data, setdata] = useState(obatFull);
  const [status, setStatus] = useState("All");

  // Mengelompokkan warna
  const [dataList, setDataList] = useState(obatFull);
  const setStatusFilter = (status) => {
    if (status !== "All") {
      setDataList([...obatFull.filter((e) => e.status === status)]);
    } else {
      setDataList(obatFull);
    }
    setStatus(status);
  };

  // FONT
  const [loaded] = useFonts({
    LexendRegular: require("../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const listObatFull = ({ item, index }) => {
    return (
      <Card
        onPress={() => navigation.navigate("ParacetamolKp", { obatFull: item })}
        style={styles.bgCard}
      >
        <TouchableOpacity style={styles.bgImgCard}>
          <Image source={item.foto} style={styles.imgCard} />
        </TouchableOpacity>
        <View style={{ padding: 10 }}>
          <Text style={styles.teksNamaCard}>{item.nama}</Text>
          <Text style={styles.teksIsiCard}>{item.isi}</Text>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.page}>
      <Image source={IconUtama} style={{ width: 200, height: 27 }} />

      {/* SEARCH BAR */}
      <View style={styles.containerIconSearch}>
        <View style={styles.bgTeksInput}>
          <TextInput
            placeholder="Cari Obat atau Tablet atau Sirup..."
            style={styles.teksInput}
          />
        </View>
        <TouchableOpacity style={styles.bgIconSearch}>
          <IconSearch width={22} height={22} />
        </TouchableOpacity>
      </View>

      {/* BOX SEARCH */}
      <View style={{ flexDirection: "row" }}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[
              styles.boxSearch,
              status === e.status && styles.boxSearchAct,
            ]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.teksSearch,
                status === e.status && styles.teksSearchAct,
              ]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* GAMBAR */}
      <View style={{ paddingBottom: 140 }}>
        <FlatList
          data={dataList}
          renderItem={listObatFull}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Obat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: warnaPutih,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  containerIconSearch: {
    flexDirection: "row",
    borderRadius: 25,
    padding: 3,
    backgroundColor: "white",
    marginTop: 15,
  },
  bgTeksInput: {
    borderRadius: 20,
    padding: 8,
    width: "80%",
  },
  teksInput: {
    marginLeft: 15,
    fontFamily: "LexendRegular",
    fontSize: 12,
  },
  bgIconSearch: {
    backgroundColor: warnaUtama,
    justifyContent: "center",
    width: "20%",
    borderRadius: 25,
    alignItems: "flex-end",
    paddingRight: 20,
    marginVertical: 1,
    marginHorizontal: -1,
  },
  boxSearchAct: {
    backgroundColor: warnaHitam,
    paddingVertical: 7,
    width: "17%",
    borderRadius: 12,
    marginTop: 15,
    marginRight: 12,
  },
  boxSearch: {
    backgroundColor: warnaBox,
    paddingVertical: 7,
    width: "17%",
    borderRadius: 12,
    marginTop: 15,
    marginRight: 12,
  },
  teksSearchAct: {
    color: "white",
    textAlign: "center",
    fontFamily: "LexendRegular",
    fontSize: 12,
  },
  teksSearch: {
    color: warnaHitam,
    textAlign: "center",
    fontFamily: "LexendRegular",
    fontSize: 12,
  },

  // CARD
  bgCard: {
    borderRadius: 15,
    marginVertical: 10,
    width: "47%",
    marginRight: 16,
  },
  bgImgCard: {
    height: 110,
    padding: 10,
  },
  imgCard: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  teksNamaCard: {
    fontSize: 17,
    fontFamily: "LexendBold",
  },
  teksIsiCard: {
    color: warnaAbu,
    fontFamily: "LexendRegular",
  },
});
