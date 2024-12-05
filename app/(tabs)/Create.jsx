import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormSelect from "../../components/FormSelect";
import categoryJson from "../../lib/categoryJson.json";
import subCategoryJson from "../../lib/subCategoryJson.json";
import FormField from "../../components/FormField";
import CreateCustomButton from "../../components/CreateCustomButton";
import AddSubCategory from "../../components/create/AddSubCategory";
import FormDatePicker from "../../components/FormDatePicker";
import globalStyles from "../../assets/style";

const Create = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [subCatData, setSubCatData] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCatModalOpen, setIsCatModalOpen] = useState(false)
  const [showSubCatModal, setShowSubCatModal] = useState(false);
  const [formData, setFormData] = useState({
    expenceName: "",
    expenceAmount: "",
    date: "",
  });
  const handleSubmit = () => {};

  useEffect(() => {
    if (selectedOption) {
      const dat = subCategoryJson?.find(
        (category) => category.catId === selectedOption?.id
      )?.data;
      setSubCatData(dat || []);
      setSelectedSubCategory(dat[0]);
    }
  }, [selectedOption]);

  const isModalOpen = isCatModalOpen || showSubCatModal;

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="my-6 px-4"
        style={isModalOpen ? globalStyles.modalBackground : null}
        >
        <Text className="text-white font-semibold" style={styles.heading}>
          Add Expense
        </Text>
        <ScrollView>
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
              title="Expense Name"
              placeholder="Enter Your Expense Name"
              value={formData.expenceName}
              handleChangeText={(e) =>
                setFormData({ ...formData, expenceName: e })
              }
              otherStyles="mt-7"
              keyboardType="default"
              show={false}
            />
            <FormDatePicker
              title="Select date"
              placeholder="Please select date"
              value={formData.date}
              handleDateChange={(e) => setFormData({ ...formData, date: e })}
              otherStyles="mt-7"
            />
            <FormField
              title="Amount"
              placeholder="Enter Your Expense Amount"
              value={formData.expenceAmount}
              handleChangeText={(e) =>
                setFormData({ ...formData, expenceAmount: e })
              }
              otherStyles="mt-7"
              keyboardType="numeric"
              show={false}
            />
          </View>
          <View className="d-flex flex-row justify-between">
            <CreateCustomButton
              title="Cancel"
              handlePress={handleSubmit}
              containerStyles="mt-7 w-[42%] bg-[#A0AECB] border-black-200"
              isLoading={loading}
              textStyles="text-black"
            />
            <CreateCustomButton
              title="Save"
              handlePress={handleSubmit}
              containerStyles="mt-7 w-[42%] bg-[#3A9AD9] border-black-200"
              isLoading={loading}
            />
          </View>
        </ScrollView>
      </View>
      {isModalOpen && <View style={globalStyles.overlay} />}
      {showSubCatModal && (
        <AddSubCategory
          showSubCatModal={showSubCatModal}
          setShowSubCatModal={setShowSubCatModal}
          categoryJson={categoryJson}
          setIsCatModalOpen={setIsCatModalOpen}
        />
      )}
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
});
