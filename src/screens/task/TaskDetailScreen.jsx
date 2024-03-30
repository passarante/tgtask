import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import StackHeader from "../../components/common/StackHeader";
import { COLORS, fontFamilies } from "../../constants";
import { CalendarRemove, Edit, Profile2User } from "iconsax-react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import ProjectTaskCard from "../../components/task/ProjectTaskCard";

const TaskDetailScreen = () => {
  const projectTasks = [
    {
      id: 1,
      title: "User Interviews",
      completed: true,
    },
    {
      id: 2,
      title: "Wireframes",
      completed: true,
    },
    {
      id: 3,
      title: "Design System",
      completed: true,
    },
    {
      id: 4,
      title: "Icons",
      completed: false,
    },
    {
      id: 5,
      title: "Final Mockups",
      completed: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* StackHeader */}
      <StackHeader
        back
        title="Task Detail"
        left={<Edit color={COLORS.white} size={24} />}
      />
      <Text style={styles.taskName}>Real Estate App Design</Text>

      {/* Infobox Container */}
      <View style={styles.infoBoxContainer}>
        <View style={styles.infoBox}>
          <View style={styles.infoBoxLeft}>
            <CalendarRemove color={COLORS.black} size={24} />
          </View>
          <View>
            <Text style={styles.titleText}>Teslim Tarihi</Text>
            <Text style={styles.dueDateText}>24 Haz.</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoBoxLeft}>
            <Profile2User color={COLORS.black} size={24} />
          </View>
          <View>
            <Text style={styles.titleText}>Users</Text>
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
          </View>
        </View>
      </View>

      {/* Project Info */}
      <View style={styles.projectDetailsContainer}>
        <Text style={styles.detailTitle}>Project Details</Text>
        <Text style={styles.projectDetailText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </Text>
      </View>

      {/* Project Progress */}
      <View style={styles.projectProgressContainer}>
        <Text style={styles.detailTitle}>Project Progress</Text>
        <CircularProgress
          value={60}
          activeStrokeWidth={5}
          inActiveStrokeWidth={5}
          activeStrokeColor={COLORS.btnPrimary}
          progressValueColor={COLORS.white}
          radius={40}
        />
      </View>


      {/* Project Tasks */}
      <View style={styles.projectTasksContainer}>
        <Text style={styles.detailTitle}>All Tasks</Text>
        <FlatList
          data={projectTasks}
          renderItem={({ item }) => <ProjectTaskCard task={item} />}
        />
      </View>

      {/* Add Task Btn */}
      <View style={styles.addTaskBtnContainer}>
        <TouchableOpacity style={styles.addTaskBtn}>
          <Text style={styles.addTaskBtnText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginTop: 10,
    padding: 40,
  },
  taskName: {
    fontSize: 22,
    color: COLORS.white,
    fontFamily: fontFamilies.semibold,
  },
  infoBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoBoxLeft: {
    backgroundColor: COLORS.btnPrimary,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  titleText: {
    color: COLORS.text,
    fontSize: 11,
    fontFamily: fontFamilies.medium,
  },
  dueDateText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: fontFamilies.semibold,
  },
  infoBoxRight: {},
  teamMembersContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },

  teamMemberImage: {
    marginLeft: -8,
    width: 20,
    height: 20,
  },
  projectDetailsContainer: {
    marginTop: 30,
  },
  detailTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: fontFamilies.medium,
    marginBottom: 9,
  },
  projectDetailText: {
    color: COLORS.projectText,
    fontSize: 12,
    fontFamily: fontFamilies.regular,
  },
  projectProgressContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectTasksContainer: {
    marginTop: 12,
  },
  addTaskBtnContainer: {
    backgroundColor: COLORS.tabBackground,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  addTaskBtn: {
    backgroundColor: COLORS.btnPrimary,
    padding: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  addTaskBtnText: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: fontFamilies.medium,
  },
});
