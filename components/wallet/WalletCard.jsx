import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "../../constants";

const WalletCard = ({ setShowWalletModal }) => {
  return (
    <LinearGradient
      colors={["#1e293b", "#c2a71d"]}
      // colors={["#1e293b", "#10b981"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 0.5 }}
      style={[{ borderRadius: 20 }]}
    >
      <View
        className="d-flex flex-col justify-around p-4"
        style={[styles.boxContainer]}
      >
        <View className="d-flex flex-row justify-between">
          <View className="d-flex flex-row gap-3">
            <View className="bg-black p-2 rounded-xl">{icons.wallet}</View>
            <Text
              className="text-white font-psemibold my-auto"
              style={styles.amountFont}
            >
              ₹ 20000
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setShowWalletModal(true)}
            activeOpacity={0.7}
          >
            <View className="w-14 h-auto my-auto">{icons.edit}</View>
          </TouchableOpacity>
        </View>
        <Text className="text-gray-50 font-pregular w-[60%]">
          Your selected salary date is{" "}
          <Text className="text-blue-300 font-psemibold">December 15th</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default WalletCard;

const styles = StyleSheet.create({
  boxContainer: {
    width: "auto",
    height: 150,
  },
  amountFont: {
    fontSize: 16,
  },
});
