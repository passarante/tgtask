import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, fontFamilies } from "./../../constants/index";
import { SearchNormal1, Setting4 } from "iconsax-react-native";
import CompletedTaskCard from "../../components/home/CompletedTaskCard";
import SectionHeader from "../../components/common/SectionHeader";
import OngoingProjectCard from "../../components/home/OngoingProjectCard";

const completedTasks = [
  {
    id: 1,
    title: "Real Estate Website Design",
  },
  {
    id: 2,
    title: "Finance Mobile App Design",
  },
  {
    id: 3,
    title: "Web AI Generics",
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.usernameText}>Fazıl Laghari</Text>
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.headerImage}
          />
        </View>
      </View>

      {/* Search & Filter */}
      <View style={styles.searcAndFilterContainer}>
        <View style={styles.searchContainer}>
          <SearchNormal1
            color={COLORS.searchIcon}
            size={24}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search tasks"
            style={styles.searchTextInput}
            placeholderTextColor={COLORS.searchIcon}
          />
        </View>
        <TouchableOpacity style={styles.filter}>
          <Setting4 size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Completed Tasks Section */}
      <View style={styles.completedTaskSection}>
        <SectionHeader title="Completed Tasks" link="See All" />
        <View style={styles.cards}>
          <FlatList
            horizontal
            data={completedTasks}
            renderItem={({ item }) => (
              <CompletedTaskCard
                title={item.title}
                id={item.id}
                mahmut={true}
              />
            )}
          />
        </View>
      </View>
      {/* Ongoing Projects */}
      <View style={styles.ongoingProjectSection}>
        <SectionHeader title="Ongoing Projects" link="See All" />
        <OngoingProjectCard
          title="Mobile App Wireframe"
          dueDate="21 Haz"
          percent={75}
        />
        <OngoingProjectCard
          title="Real Estate App Design"
          dueDate="12 Temmuz"
          percent={40}
        />
        <OngoingProjectCard
          title="Dashboard & App Design"
          dueDate="24 Temmuz"
          percent={12}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 22,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 12,
    fontFamily: fontFamilies.medium,
    color: COLORS.textPrimary,
  },
  usernameText: {
    fontSize: 22,
    color: COLORS.white,
    fontFamily: fontFamilies.semibold,
  },
  headerImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.lightblue,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: 36,
    height: 36,
    borderRadius: 16,
  },
  searcAndFilterContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  searchContainer: {
    position: "relative",
    flex: 1,
  },
  searchTextInput: {
    backgroundColor: COLORS.textInput,
    height: 52,
    paddingLeft: 52,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 10,
    top: 14,
    left: 14,
  },
  filter: {
    backgroundColor: COLORS.btnPrimary,
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  completedTaskSection: {
    marginTop: 30,
  },

  cards: {
    marginTop: 10,
  },
  ongoingProjectSection: {
    marginTop: 30,
  },
});
export default HomeScreen;
