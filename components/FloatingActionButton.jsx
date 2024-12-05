import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../assets/style";

const FloatingActionButton = ({setShowFabModal}) => {
  const handlePress = () => {
    setShowFabModal(true)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={[styles.fab, globalStyles.floatingActionBtnBg]} onPress={handlePress}>
        <MaterialIcons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    bottom: 110,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingActionButton;
