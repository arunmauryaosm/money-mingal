import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { dateToIso } from "../lib/dateFormater";
import { icons } from "../constants";

const FormDatePicker = ({
  title,
  placeholder,
  value,
  handleDateChange,
  otherStyles,
}) => {
  const [show, setShow] = React.useState(false);
  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      setShow(false);
      handleDateChange(selectedDate);
    }
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="d-flex flex-row items-center mt-1">
        <TouchableOpacity
          activeOpacity={0.7}
          className="d-flex flex-row w-full justify-between border-2 border-black-200 text-white rounded-2xl items-start font-psemibold h-16 px-4"
          onPress={() => setShow(true)}
        >
          <Text
            className={`my-auto ${
              !value ? "text-[#7b7b8b]" : "text-white"
            } font-psemibold text-base`}
          >
            {value ? dateToIso(value) : placeholder || "Select a date"}
          </Text>
          <View className="w-6 h-auto my-auto">{icons.calendar}</View>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default FormDatePicker;
