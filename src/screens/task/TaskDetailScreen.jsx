import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StackHeader from "../../components/common/StackHeader";
import { COLORS } from "../../constants";
import { Edit } from "iconsax-react-native";

const TaskDetailScreen = () => {
  return (
    <View style={styles.container}>
      <StackHeader
        back
        title="Task Detail"
        left={<Edit color={COLORS.white} size={24} />}
      />
      <Text>TaskDetailScreen</Text>
    </View>
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
});
