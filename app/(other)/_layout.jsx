import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const OtherRoutes = () => {
  return (
    <Stack>
      <Stack.Screen name="TxnDetails" options={{ headerShown: false }} />
      <StatusBar backgroundColor="#161622" style="light" />
    </Stack>
  );
};

export default OtherRoutes;

const styles = StyleSheet.create({});
