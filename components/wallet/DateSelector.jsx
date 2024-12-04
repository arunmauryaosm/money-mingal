import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DateSelector = ({ title, otherStyles }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View style={styles.container}>
        {[...Array(31)].map((_, index) => {
          const date = index + 1;
          const isSelected = selectedDate === date;

          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={date}
              style={[styles.dateBox, isSelected && styles.selectedDateBox]}
              onPress={() => handleDateSelect(date)}
            >
              <Text
                style={[styles.dateText, isSelected && styles.selectedDateText]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingVertical: 10,
  },
  dateBox: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: "#ddd",
    borderRadius: 10,
    margin: 5,
  },
  selectedDateBox: {
    backgroundColor: "#3a9ad9",
  },
  dateText: {
    fontSize: 13,
    color: "#fff",
  },
  selectedDateText: {
    color: "#fff",
  },
});

export default DateSelector;
