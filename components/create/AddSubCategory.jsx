import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FormSelect from "../FormSelect";
import FormField from "../FormField";

const AddSubCategory = ({
  showSubCatModal,
  setShowSubCatModal,
  categoryJson,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [subCatName, setSubCatName] = useState("");
  return (
    <Modal
      visible={showSubCatModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowSubCatModal(false)}
    >
      <View className="flex-1 justify-end bg-black-800 bg-opacity-50">
        <View className="bg-black-100 p-4 rounded-t-2xl space-y-4 h-[65%]">
          <ScrollView scrollEnabled={true}>
            <Text className="text-white font-semibold" style={styles.heading}>
              Add Subcategory
            </Text>
            <View className="flex-1">
              <FormSelect
                title="Select a category"
                options={categoryJson}
                placeholder="Choose an option"
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
                otherStyles="mt-7"
                empty="No options found"
              />
              <FormField
                title="Subcategory name"
                placeholder="Enter Your Subcategory Name"
                value={subCatName}
                handleChangeText={(e) => setSubCatName(e.target.value)}
                otherStyles="mt-7"
                keyboardType="default"
                show={false}
              />
            </View>
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.7}
            className="mt-4 py-3 bg-[#3a9ad9] rounded-xl"
            onPress={() => {
              setShowSubCatModal(false);
            }}
          >
            <Text className="text-center text-white font-psemibold">Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="mt-4 py-3 bg-[#A0AECB] rounded-xl"
            onPress={() => setShowSubCatModal(false)}
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

export default AddSubCategory;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
  },
});
