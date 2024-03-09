import { StyleSheet, Image, View } from "react-native";
import React from "react";
import logoImg from "../../assets/images/logo.png";

const FormHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={logoImg} />
    </View>
  );
};

export default FormHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
