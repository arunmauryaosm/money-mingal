import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons, images } from "../../constants";
import TxnDetails from "./TxnDetails";
import { router } from "expo-router";

const Transactions = ({ record }) => {
  const handleTxnDetails = () => {
    router.replace("/TxnDetails");
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleTxnDetails}>
      <View className="px-3 py-3 rounded-xl" style={styles.container}>
        <View className="d-flex flex-row justify-between">
          <View className="d-flex flex-row gap-3">
            <View
              style={[styles.padding, { backgroundColor: `#${record.color}` }]}
            >
              <Image
                source={icons.notification}
                className="w-7 h-8 my-auto"
                resizeMode="contain"
              />
            </View>
            <Text
              style={styles.type}
              className="text-white font-pregular my-auto"
            >
              {record.type}
            </Text>
          </View>
          <Text className="text-white font-psemibold my-auto">
            ₹ {record.totalAmount}
          </Text>
        </View>
        <View className="mt-1">
          {record.transactions.map((detail) => (
            <TxnDetails
              key={detail.type}
              detail={detail}
              color={record.color}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232533",
  },
  type: {
    fontSize: 15,
  },
  totalAmount: {
    fontSize: 15,
  },
  padding: {
    padding: 6,
    borderRadius: 11,
  },
});
