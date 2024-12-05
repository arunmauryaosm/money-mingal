import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import DonutGraph from "../../components/home/DonutGraph";
import Transactions from "../../components/home/Transactions";
import { router } from "expo-router";

const Home = () => {
  const widthAndHeight = 160;
  const series = [123, 321, 123, 789];
  const sliceColor = ["#c29e40", "#7ef0f2", "#8454b3", "#518085"];

  const records = [
    {
      id: 1,
      type: "Travel & transport",
      totalAmount: 10000,
      leftAmount: 7000,
      color: "c29e40",
      imageType: "travelTransport",
      transactions: [
        {
          type: "Insurance",
          totalAmount: 5000,
          leftAmount: 2000,
          progress: 0.5,
          typeOfTxn: [
            {
              name: "Car",
              amount: 2000,
            },
            {
              name: "Bike",
              amount: 1000,
            },
          ],
        },
        {
          type: "Goa Trip",
          totalAmount: 5000,
          leftAmount: 1000,
          progress: 0.7,
          typeOfTxn: [
            {
              name: "Train",
              amount: 1000,
            },
            {
              name: "Food",
              amount: 1000,
            },
            {
              name: "Activity",
              amount: 1300,
            },
            {
              name: "Shopping",
              amount: 700,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "Utility bills",
      totalAmount: 10000,
      leftAmount: 1000,
      color: "8454b3",
      imageType: "utilityBills",
      transactions: [
        {
          type: "Rent",
          totalAmount: 7000,
          leftAmount: 0,
          progress: 1.0,
          typeOfTxn: [
            {
              name: "PG",
              amount: 7000,
            },
          ],
        },
        {
          type: "Food",
          totalAmount: 3000,
          leftAmount: 1000,
          progress: 0.85,
          typeOfTxn: [
            {
              name: "Tifin",
              amount: 1000,
            },
            {
              name: "Weekends",
              amount: 1000,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      type: "Travel & transport",
      totalAmount: 10000,
      leftAmount: 7000,
      color: "c29e40",
      imageType: "travelTransport",
      transactions: [
        {
          type: "Insurance",
          totalAmount: 5000,
          leftAmount: 2000,
          progress: 0.5,
          typeOfTxn: [
            {
              name: "Car",
              amount: 2000,
            },
            {
              name: "Bike",
              amount: 1000,
            },
          ],
        },
        {
          type: "Goa Trip",
          totalAmount: 5000,
          leftAmount: 1000,
          progress: 0.8,
          typeOfTxn: [
            {
              name: "Train",
              amount: 1000,
            },
            {
              name: "Food",
              amount: 1000,
            },
            {
              name: "Activity",
              amount: 1300,
            },
            {
              name: "Shopping",
              amount: 700,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      type: "Utility bills",
      totalAmount: 10000,
      leftAmount: 1000,
      color: "8454b3",
      imageType: "utilityBills",
      transactions: [
        {
          type: "Rent",
          totalAmount: 7000,
          leftAmount: 0,
          progress: 0.2,
          typeOfTxn: [
            {
              name: "PG",
              amount: 7000,
            },
          ],
        },
        {
          type: "Food",
          totalAmount: 3000,
          leftAmount: 1000,
          progress: 0.45,
          typeOfTxn: [
            {
              name: "Tifin",
              amount: 1000,
            },
            {
              name: "Weekends",
              amount: 1000,
            },
          ],
        },
      ],
    },
  ];

  const handleSubmit = () => {
    router.replace("/TxnDetails");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="my-6 px-4">
        <View className="justify-between items-start flex-row mb-6">
          <TouchableOpacity activeOpacity={0.7} onPress={() => handleSubmit()}>
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Welcome,
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                Arun Maurya
              </Text>
            </View>
          </TouchableOpacity>
          <View className="my-auto p-[4px] border-2 rounded-lg border-gray-800 ">
            <Image
              source={icons.notification}
              className="w-7 h-8"
              resizeMode="contain"
            />
          </View>
        </View>
        <FlatList
          data={records}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Transactions record={item} />
            </View>
          )}
          ListHeaderComponent={() => (
            <View className="my-4">
              <DonutGraph
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                heading="₹ 7000"
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 140,
  },
});
