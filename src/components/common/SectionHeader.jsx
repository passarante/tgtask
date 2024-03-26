import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, fontFamilies } from "../../constants";

const SectionHeader = (props) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      {props.link && (
        <TouchableOpacity>
          <Text style={styles.sectionLink}>{props.link}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: fontFamilies.semibold,
  },
  sectionLink: {
    color: COLORS.btnPrimary,
    fontSize: 16,
    fontFamily: fontFamilies.regular,
  },
});
