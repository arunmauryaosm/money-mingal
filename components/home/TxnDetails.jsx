import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

const TxnDetails = ({ detail, color }) => {
  return (
    <View className="mt-4">
      <View style={styles.row}>
        <Text style={[styles.text, styles.type]}>{detail.type}</Text>
        <Text style={[styles.text, styles.amount]}>₹ {detail.totalAmount}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.progressContainer} className="my-auto">
          <Progress.Bar
            progress={detail.progress}
            color={`#${color}`}
            unfilledColor="#333547"
            borderWidth={0}
            animated={true}
            height={8}
            width={null}
            style={{ marginLeft: 0, marginRight: 0 }} 
          />
        </View>
        <Text style={[styles.text, styles.leftAmount]} className="my-auto">
          Left ₹ {detail.leftAmount}
        </Text>
      </View>
    </View>
  );
};

export default TxnDetails;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  text: {
    color: "#F3F4F6",
  },
  type: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "justify",
  },
  amount: {
    fontWeight: "500",
  },
  progressContainer: {
    flex: 1,
    marginRight: 10,
  },
  leftAmount: {
    width: "25%",
    textAlign: "right",
    fontWeight: "400",
    color: "#D1D5DB",
  },
});
