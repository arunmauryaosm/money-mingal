import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FormField from "../FormField";
import DateSelector from "./DateSelector";

const WalletModal = ({ showWalletModal, setShowWalletModal }) => {
  const [salaryAmount, setSalaryAmount] = useState(null);

  return (
    <Modal
      visible={showWalletModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowWalletModal(false)}
    >
      <View className="flex-1 justify-end bg-black-800 bg-opacity-50">
        <View
          className="bg-black-100 p-4 rounded-t-2xl space-y-4"
          style={{ minHeight: "75%" }}
        >
          <ScrollView scrollEnabled={true}>
            <Text
              className="text-white font-semibold mt-4"
              style={styles.heading}
            >
              Salary Details :
            </Text>
            <View className="flex-1">
              <DateSelector title="Select Date" otherStyles="mt-7" />
              <FormField
                title="Amount"
                placeholder="Enter Your Amount"
                value={salaryAmount}
                handleChangeText={(e) => setSalaryAmount(e.target.value)}
                otherStyles="mt-4"
                keyboardType="numeric"
                show={false}
              />
            </View>
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.7}
            className="mt-4 py-3 bg-[#3a9ad9] rounded-xl"
            onPress={() => {
              setShowWalletModal(false);
            }}
          >
            <Text className="text-center text-white font-psemibold">Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="mt-4 py-3 bg-[#A0AECB] rounded-xl"
            onPress={() => setShowWalletModal(false)}
          >
            <Text className="text-center text-[#222] font-psemibold">
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default WalletModal;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
  },
});
