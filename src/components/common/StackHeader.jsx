import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, fontFamilies } from "../../constants";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const StackHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {props.back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color={COLORS.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{props.title}</Text>
      {props.left && (
        <TouchableOpacity style={styles.leftContainer}>
          {props.left}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 50,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: fontFamilies.medium,
  },
  leftContainer: {
    position: "absolute",
    right: 0,
    top: 13,
  },
});
