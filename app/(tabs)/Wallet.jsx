import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Wallet = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="my-6 px-4">
        <ScrollView>
          <Text className="text-white font-semibold" style={styles.heading}>
            Wallet
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
});
