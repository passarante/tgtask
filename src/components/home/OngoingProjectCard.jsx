import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, fontFamilies } from "../../constants";
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from "@react-navigation/native";

const OngoingProjectCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("TaskDetailScreen")}
    >
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.body}>
        <View>
          <Text style={styles.text}>Team Members</Text>
          <View style={styles.teamMembersContainer}>
            <Image
              style={styles.teamMemberImage}
              source={require("../../assets/images/user1.png")}
            />
            <Image
              style={styles.teamMemberImage}
              source={require("../../assets/images/user2.png")}
            />
            <Image
              style={styles.teamMemberImage}
              source={require("../../assets/images/user3.png")}
            />
          </View>
          <View>
            <Text style={styles.text}>Teslim : {props.dueDate}</Text>
          </View>
        </View>
        <View>
          <CircularProgress
            value={props.percent}
            activeStrokeWidth={5}
            inActiveStrokeWidth={5}
            activeStrokeColor={COLORS.btnPrimary}
            progressValueColor={COLORS.white}
            radius={40}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.textInput,
    height: 140,
    width: "100%",
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: fontFamilies.semibold,
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: fontFamilies.regular,
  },
  teamMembersContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  membersImagesContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  teamMemberImage: {
    marginLeft: -8,
    width: 20,
    height: 20,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default OngoingProjectCard;
