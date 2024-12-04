import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WalletCard from "../../components/wallet/WalletCard";
import { icons } from "../../constants";
import { Image } from "react-native";
import globalStyles from "../../assets/style";
import FloatingActionButton from "../../components/FloatingActionButton";
import WalletModal from "../../components/wallet/WalletModal";

const walletJson = [
  {
    type: "Food & Dining",
    amount: 4000,
    color: "518085",
    subCat: [
      {
        name: "Groceries",
        catAmount: 2000,
        numberOfTxn: 3,
        totalAmount: 1800,
      },
      {
        name: "Restaurants",
        catAmount: 2000,
        numberOfTxn: 2,
        totalAmount: 1450,
      },
    ],
  },
  {
    type: "Transportation",
    amount: 5500,
    color: "8454b3",
    subCat: [
      {
        name: "Insurance",
        catAmount: 3000,
        numberOfTxn: 2,
        totalAmount: 0,
      },
      {
        name: "Fuel",
        catAmount: 2000,
        numberOfTxn: 3,
        totalAmount: 1800,
      },
    ],
  },
  {
    type: "Bills & Utilities",
    amount: 6000,
    color: "c29e40",
    subCat: [
      {
        name: "Electricity",
        catAmount: 4000,
        numberOfTxn: 2,
        totalAmount: 0,
      },
      {
        name: "Water",
        catAmount: 1000,
        numberOfTxn: 1,
        totalAmount: 0,
      },
      {
        name: "Internet",
        catAmount: 400,
        numberOfTxn: 1,
        totalAmount: 0,
      },
      {
        name: "Phone bills",
        catAmount: 600,
        numberOfTxn: 2,
        totalAmount: 0,
      },
    ],
  },
];

const Wallet = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="my-6 px-4">
        <Text className="text-white font-semibold" style={styles.heading}>
          Wallet
        </Text>
        <ScrollView
          style={[globalStyles.tabMarginBottom]}
          contentContainerStyle={globalStyles.tabPaddingBottom}
        >
          <View style={styles.container}>
            <WalletCard setShowWalletModal={setShowWalletModal} />
          </View>
          {walletJson.map((item) => (
            <View
              className="p-3 rounded-xl bg-[#1F1F1F]"
              style={styles.container}
              key={item.type}
            >
              <View className="d-flex flex-row justify-between">
                <View className="d-flex flex-row gap-3">
                  <View
                    style={[
                      styles.padding,
                      { backgroundColor: `#${item.color}` },
                    ]}
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
                    {item.type}
                  </Text>
                </View>
                <Text className="text-white font-psemibold my-auto">
                  ₹ {item.amount}
                </Text>
              </View>
              {item.subCat.map((data) => (
                <View className="mt-3" key={data.name}>
                  <View className="d-flex flex-row justify-between">
                    <Text
                      style={styles.type}
                      className="text-white font-psemibold"
                    >
                      {data.name}
                    </Text>
                    <Text
                      style={styles.subCatFont}
                      className="text-white font-psemibold my-auto text-right"
                    >
                      ₹ {data.catAmount}
                    </Text>
                  </View>
                  <View className="d-flex flex-row justify-between">
                    <Text style={styles.subCategory} className="font-pregular">
                      {data.numberOfTxn}{" "}
                      {data.numberOfTxn == 1 ? "transaction" : "transactions"}
                    </Text>
                    <Text
                      style={[styles.subCategory]}
                      className="font-pregular"
                    >
                      Left ₹ {data.totalAmount}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
        <FloatingActionButton />
      </View>
      {showWalletModal && (
        <WalletModal
          showWalletModal={showWalletModal}
          setShowWalletModal={setShowWalletModal}
        />
      )}
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingBottom: 15,
  },
  container: {
    marginTop: 10,
  },
  editIconSize: {
    fontSize: 14,
  },
  type: {
    fontSize: 15,
  },
  subCatFont: {
    fontSize: 12,
  },
  totalAmount: {
    fontSize: 15,
  },
  padding: {
    padding: 6,
    borderRadius: 11,
  },
  subCategory: {
    fontSize: 12,
    fontWeight: "500",
    color: "#D1D5DB",
  },
});
