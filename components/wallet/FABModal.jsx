import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import FormSelect from "../FormSelect";
import categoryJson from "../../lib/categoryJson.json";
import subCategoryJson from "../../lib/subCategoryJson.json";
import AddSubCategory from "../create/AddSubCategory";
import FormField from "../FormField";

const FABModal = ({ showFabModal, setShowFabModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [subCatData, setSubCatData] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [showSubCatModal, setShowSubCatModal] = useState(false);
  const [allocateAmount, setAllocateAmount] = useState(null);
  const [isCatModalOpen, setIsCatModalOpen] = useState(false)

  useEffect(() => {
    if (selectedOption) {
      const dat = subCategoryJson?.find(
        (category) => category.catId === selectedOption?.id
      )?.data;
      setSubCatData(dat || []);
      setSelectedSubCategory(dat[0]);
    }
  }, [selectedOption]);

  return (
    <Modal
      visible={showFabModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowFabModal(false)}
    >
      <View className="flex-1 justify-end bg-black-800 bg-opacity-50">
        <View
          className="bg-black-100 p-4 rounded-t-2xl space-y-4"
          style={{ minHeight: "65%" }}
        >
          <ScrollView scrollEnabled={true}>
            <Text
              className="text-white font-semibold mt-4"
              style={styles.heading}
            >
              Amount allocation
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
                setIsCatModalOpen={setIsCatModalOpen}
              />
              <FormSelect
                title="Select a subcategory"
                options={subCatData}
                placeholder="Choose an option"
                selectedValue={selectedSubCategory}
                onValueChange={setSelectedSubCategory}
                otherStyles="mt-7"
                empty="No options found for subcategory"
                setShowSubCatModal={setShowSubCatModal}
                setIsCatModalOpen={setIsCatModalOpen}
              />
              <FormField
                title="Amount"
                placeholder="Enter Your Amount"
                value={allocateAmount}
                handleChangeText={(e) => setAllocateAmount(e.target.value)}
                otherStyles="mt-4"
                keyboardType="numeric"
                show={false}
              />
            </View>
          </ScrollView>
          <View className="d-flex flex-row justify-between">
            <TouchableOpacity
              activeOpacity={0.7}
              className="mt-4 py-3 bg-[#A0AECB] rounded-xl w-[45%]"
              onPress={() => setShowFabModal(false)}
            >
              <Text className="text-center text-[#222] font-psemibold">
                Close
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="mt-4 py-3 bg-[#3a9ad9] rounded-xl w-[45%]"
              onPress={() => {
                setShowFabModal(false);
              }}
            >
              <Text className="text-center text-white font-psemibold">
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {showSubCatModal && (
        <AddSubCategory
          showSubCatModal={showSubCatModal}
          setShowSubCatModal={setShowSubCatModal}
          categoryJson={categoryJson}
          setIsCatModalOpen={setIsCatModalOpen}
        />
      )}
    </Modal>
  );
};

export default FABModal;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
  },
});
