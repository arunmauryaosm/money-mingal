import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1, id: 2, id: 2 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Arun Maurya
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={icons.notification}
                  className="w-7 h-8 border-2 border-black-100 rounded-lg p-1"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
