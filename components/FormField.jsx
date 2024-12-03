import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import icons from "../constants/icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  show,
}) => {
  const [showPassword, setShowPassword] = useState(show);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="relative flex-row items-center mt-1">
        <TextInput
          className="flex-1 border-2 border-black-200 text-white rounded-2xl items-center font-psemibold h-16 px-4 text-base w-full my-auto focus:border-blue-900"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChange={handleChangeText}
          secureTextEntry={showPassword}
          keyboardType={keyboardType}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute my-auto right-5"
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="conatin"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
