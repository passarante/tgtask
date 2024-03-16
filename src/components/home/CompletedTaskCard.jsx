import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, fontFamilies } from "../../constants";

const CompletedTaskCard = (props) => {
  return (
    <View
      style={[
        styles.completedTaskCard,
        {
          backgroundColor: props.id == 1 ? COLORS.btnPrimary : COLORS.textInput,
        },
      ]}
    >
      {/* Card Header */}
      <View>
        <Text
          style={[
            styles.cardHeaderTitle,
            {
              color: props.id == 1 ? COLORS.black : COLORS.white,
            },
          ]}
        >
          {props.title}
        </Text>
      </View>
      <View style={styles.teamMembersContainer}>
        <Text
          style={[
            styles.teamMembersText,
            {
              color: props.id == 1 ? COLORS.black : COLORS.white,
            },
          ]}
        >
          Team members
        </Text>
        <View style={styles.membersImagesContainer}>
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
          <Image
            style={styles.teamMemberImage}
            source={require("../../assets/images/user4.png")}
          />
          <Image
            style={styles.teamMemberImage}
            source={require("../../assets/images/user5.png")}
          />
        </View>
      </View>
      <View>
        <View style={styles.cardFooter}>
          <Text
            style={[
              styles.completedText,
              {
                color: props.id == 1 ? COLORS.black : COLORS.white,
              },
            ]}
          >
            Completed
          </Text>
          <Text
            style={[
              styles.completedPercent,
              {
                color: props.id == 1 ? COLORS.black : COLORS.white,
              },
            ]}
          >
            100%
          </Text>
        </View>
        <View
          style={[
            styles.taskProgress,
            {
              backgroundColor: props.id == 1 ? COLORS.black : COLORS.white,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default CompletedTaskCard;

const styles = StyleSheet.create({
  completedTaskCard: {
    width: 170,
    height: 180,
    padding: 10,
    marginRight: 10,
  },
  cardHeaderTitle: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: fontFamilies.bold,
  },
  teamMembersContainer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamMembersText: {
    fontSize: 11,
    color: COLORS.white,
  },
  membersImagesContainer: {
    flexDirection: "row",
  },
  teamMemberImage: {
    marginLeft: -8,
    width: 20,
    height: 20,
  },
  cardFooter: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedText: {
    color: COLORS.white,
  },
  completedPercent: {
    color: COLORS.white,
  },
  taskProgress: {
    marginTop: 5,
    height: 6,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
});
