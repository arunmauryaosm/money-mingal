import {
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { router } from "expo-router";
import globalStyles from "../assets/style.js";
import CustomButton from "../components/CustomButton";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="flex-row items-center justify-center gap-2">
            <Image
              source={images.Logo}
              className="w-[50px] h-[50px]"
              resizeMode="contain"
            />
            <Text className="text-white font-bold text-start text-2xl">
              MoneyMingle
            </Text>
          </View>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[450px] -mb-10"
            resizeMethod="contain"
          />
          <View className="relative">
            <Text className="text-2xl text-white font-bold text-center">
              Effortless Money Management <Text>with </Text>
              <Text
                style={globalStyles.blueTextColor}
                className="primary-blue-text text-3xl"
              >
                MoneyMingle
              </Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-2 text-center">
            Empower Your Financial Future: Where Wisdom Meets Innovation.
          </Text>
          <CustomButton
            title="Continue"
            handlePress={() => router.push("/SignIn")}
            containerStyles="w-full mt-14"
            textStyles=""
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Index;
