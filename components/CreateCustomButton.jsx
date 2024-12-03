import { Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CreateCustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`border rounded-xl min-h-[55px] justify-center items-center
      ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`text-[#F0F0F0] font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CreateCustomButton;
