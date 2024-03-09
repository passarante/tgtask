import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const PrimaryButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={[styles.btn, props.style]}>
        <Text style={styles.btnText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.btnPrimary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  btnText: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },
});
