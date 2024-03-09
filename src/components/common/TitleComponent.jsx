import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleComponent = (props) => {
  return (
    <Text
      style={[
        styles.textStyle,
        { color: props.color ?? "white" },
        { fontSize: props.size ?? 14 },
        props.style,
      ]}
    >
      {props.title}
    </Text>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 40,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 22,
  },
});
