import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, fontFamilies } from "../../constants";
import { TickCircle } from "iconsax-react-native";

const ProjectTaskCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.task.title}</Text>
      </View>
      <View style={styles.right}>
        {props.task.completed ? (
          <TickCircle color={COLORS.black} size={24} />
        ) : (
          <View style={styles.notCompleted} />
        )}
      </View>
    </View>
  );
};

export default ProjectTaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.textInput,
    flexDirection: "row",
    height: 56,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: fontFamilies.medium,
  },
  right: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.btnPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  notCompleted: {
    borderWidth: 2,
    borderColor: COLORS.black,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
