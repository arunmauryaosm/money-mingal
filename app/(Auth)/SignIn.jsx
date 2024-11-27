import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import globalStyles from "../../assets/style";
import { Link, router } from "expo-router";
import { images } from "../../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    router.replace("/Home");
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <View className="flex-row items-center justify-center gap-2 mb-8">
            <Image
              source={images.Logo}
              className="w-[50px] h-[50px]"
              resizeMode="contain"
            />
            <Text className="text-white font-bold text-start text-2xl">
              MoneyMingle
            </Text>
          </View>
          <Text className="text-2xl text-white text-semibold mt-10  font-psemibold">
            Sign In
          </Text>
          <FormField
            title="Email"
            placeholder="Enter Your Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            show={false}
          />
          <FormField
            title="Password"
            placeholder="Enter Your Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
            show={true}
          />
          <CustomButton
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={loading}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-base text-gray-100 font-pregular">
              Don't have an account?{" "}
              <Link
                className="text-base font-psemibold"
                style={globalStyles.blueTextColor}
                href="/SignUp"
              >
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
