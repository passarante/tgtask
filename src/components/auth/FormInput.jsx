import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const FormInput = (props) => {
  const { label, leftIcon, rightIcon, placeholder } = props;

  return (
    <View style={styles.formInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputContainer}>
        {leftIcon}
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={COLORS.white}
        />
        {rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formInputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: "Inter_400Regular",
    color: COLORS.text,
    marginBottom: 10,
  },
  textInputContainer: {
    position: "relative",
  },

  textInput: {
    height: 50,
    backgroundColor: COLORS.textInput,
    paddingLeft: 68,
    color: COLORS.white,
  },
});

export default FormInput;
