import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PieChart from "react-native-pie-chart";

const DonutGraph = ({ widthAndHeight, series, sliceColor, heading }) => {
  return (
    <View style={styles.container}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.75}
      />
      <View style={styles.centerTextContainer}>
        <Text className="font-psemibold" style={styles.headingText}>{heading}</Text>
        <Text className="font-pregular text-gray-100" style={styles.paraText}>Left to <Text className="font-psemibold">INVEST</Text></Text>
      </View>
    </View>
  );
};

export default DonutGraph;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  centerTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  headingText: {
    fontSize: 17,
    color: "#fff",
  },
  paraText: {
    fontSize: 12,
  },
});
