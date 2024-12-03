import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="my-6 px-4">
        <Text className="text-white font-semibold" style={styles.heading}>
          Profile
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
});
