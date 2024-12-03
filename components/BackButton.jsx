import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "../constants";
import { router } from "expo-router";

const BackButton = ({ navigation }) => {
  const handleBack = (back) => {
    router.push(back);
  };
  return (
    <TouchableOpacity
      onPress={() => handleBack(navigation)}
      className="border-gray-800 my-2"
      style={styles.backIcon}
      activeOpacity={0.7}
    >
      <View className="w-10 h-auto my-auto">{icons.backArrow}</View>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    width: 40,
    height: "auto",
    borderWidth: 1.5,
  },
});
