import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { warnaPutih, warnaUtama, warnaAbu, obatPopuler } from "../../utils";
import { IconUtamaWhite, ImgAkunHome, ImgHome } from "../../../assets";
import { useFonts } from "expo-font";

const Home = ({ navigation }) => {
  const [data, setdata] = useState(obatPopuler);

  const [loaded] = useFonts({
    LexendRegular: require("../../fonts/Lexend-Regular.ttf"),
    LexendBold: require("../../fonts/Lexend-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const listObat = ({ item }) => {
    return (
      <Card
        style={styles.containerCard}
        onPress={() => navigation.navigate("ParacetamolKp")}
      >
        <TouchableOpacity
          style={styles.bgCardImg}
          onPress={() => navigation.navigate("ParacetamolKp")}
        >
          <Image source={item.foto} style={styles.cardImg} />
        </TouchableOpacity>
        <View style={styles.bgCardTeks}>
          <Text style={styles.cardTeks}>{item.nama}</Text>
          <Text style={styles.cardIsi}>{item.isi}</Text>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={warnaUtama}
        translucent
      />
      {/* HEADER */}
      <View style={styles.header}>
        {/* 70% */}
        <View style={styles.bgImgHeader}>
          <Image source={IconUtamaWhite} style={styles.imgHeader} />
          <Text style={styles.teksHeader}>How are you feeling today?</Text>
        </View>
        {/* 30% */}
        <TouchableOpacity style={styles.bgImgAkun}>
          <Image source={ImgAkunHome} style={styles.imgAkun} />
        </TouchableOpacity>
      </View>

      {/* GAMBAR UTAMA */}
      <TouchableOpacity
        style={styles.bgImgUtama}
        onPress={() => navigation.navigate("Berita")}
      >
        <Image source={ImgHome} style={styles.imgUtama} />
      </TouchableOpacity>

      {/* OBAT POPULER */}
      <View style={styles.obatPop}>
        <View style={styles.bgTeksPop}>
          <Text style={styles.teksPop}>Obat Terpopuler</Text>
        </View>
        <TouchableOpacity
          style={styles.bgSee}
          onPress={() => navigation.navigate("Obat")}
        >
          <Text style={styles.teksSee}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flat}>
        {/* GAMBAR OBAT POPULER */}
        <FlatList
          data={data}
          renderItem={listObat}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: warnaPutih,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  // CARD
  containerCard: {
    marginRight: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  bgCardImg: {
    height: 125,
    alignItems: "center",
    padding: 10,
  },
  cardImg: {
    borderRadius: 10,
  },
  bgCardTeks: {
    padding: 10,
  },
  cardTeks: {
    fontSize: 17,
    fontFamily: "LexendBold",
  },
  cardIsi: {
    color: warnaAbu,
    fontFamily: "LexendRegular",
  },

  // HEADER
  header: {
    flexDirection: "row",
    backgroundColor: warnaUtama,
    marginHorizontal: -20,
  },
  bgImgHeader: {
    height: 80,
    width: "70%",
    paddingHorizontal: 20,
  },
  imgHeader: {
    width: 200,
    height: 20,
    marginTop: 10,
  },
  teksHeader: {
    color: "white",
    marginTop: 15,
    fontSize: 14,
    fontFamily: "LexendRegular",
  },
  bgImgAkun: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  imgAkun: {
    width: 42,
    height: 42,
  },
  bgImgUtama: {
    marginTop: 20,
  },
  imgUtama: {
    width: 320,
    height: 150,
    borderRadius: 15,
  },
  obatPop: {
    marginTop: 15,
    flexDirection: "row",
  },
  bgTeksPop: {
    width: "70%",
  },
  teksPop: {
    fontSize: 16,
    fontFamily: "LexendBold",
  },
  bgSee: {
    width: "30%",
    alignItems: "flex-end",
  },
  teksSee: {
    fontSize: 14,
    color: warnaUtama,
    fontFamily: "LexendRegular",
  },
  flat: {
    flexDirection: "row",
  },
});
