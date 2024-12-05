import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from "react-native";
import { icons } from "../constants";

const FormSelect = ({
  title,
  options,
  placeholder,
  selectedValue,
  onValueChange,
  otherStyles,
  empty,
  setShowSubCatModal,
  setIsCatModalOpen
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = options.filter((option) =>
      option.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  useEffect(() => {
    setFilteredOptions(options || []);
  }, [options]);

  const handleSelect = (value) => {
    onValueChange(value);
    setModalVisible(false);
    setSearchText("");
    setFilteredOptions(options);
    setIsCatModalOpen(false)
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium`}>{title}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        className={`border-2 border-black-200 w-full h-16 px-4 text-white rounded-2xl focus:border-blue-900 flex-row items-center mt-1`}
        onPress={() => {setModalVisible(true), setIsCatModalOpen(true)}}
      >
        <Text
          className={`flex-1 ${
            !selectedValue?.name ? "text-[#7b7b8b]" : "text-white"
          } font-psemibold text-base`}
        >
          {selectedValue?.name || placeholder}
        </Text>
        <View className="w-6 h-auto my-auto">{icons.dropdown}</View>
      </TouchableOpacity>

      {/* Modal for showing dropdown */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {setModalVisible(false), setIsCatModalOpen(false)}}
      >
        <View className="flex-1 justify-end bg-black-800 bg-opacity-50">
          <View className="bg-[#232533] p-4 rounded-t-2xl space-y-4 h-[65%]">
            <TextInput
              className="border-2 border-black-200 focus:border-blue-900 w-full h-16 px-4 bg-black-100 rounded-xl text-white font-psemibold"
              placeholder="Search..."
              placeholderTextColor="#7b7b8b"
              value={searchText}
              onChangeText={handleSearch}
              textAlignVertical="center"
            />
            <FlatList
              data={filteredOptions}
              keyExtractor={(item) => item.name.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="py-4 px-2 border-b border-gray-700"
                  onPress={() => handleSelect(item)}
                >
                  <Text className="text-white font-pmedium">{item.name}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <Text className="text-center text-gray-400 mt-4">{empty}</Text>
              }
            />
            <View className="d-flex flex-row justify-between">
              <TouchableOpacity
                activeOpacity={0.7}
                className={`mt-4 py-3 bg-[#A0AECB] rounded-xl ${title == "Select a subcategory" ? "w-[45%]" : "w-[100%]"} `}
                onPress={() => {setModalVisible(false), setIsCatModalOpen(false)}}
              >
                <Text className="text-center text-[#222] font-psemibold">
                  Close
                </Text>
              </TouchableOpacity>
              {title == "Select a subcategory" && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  className="mt-4 py-3 bg-[#3a9ad9] rounded-xl  w-[45%]"
                  onPress={() => {
                    setModalVisible(false), setShowSubCatModal(true), setIsCatModalOpen(false);
                  }}
                >
                  <Text className="text-center text-white font-psemibold">
                    Add Subcategory
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FormSelect;
