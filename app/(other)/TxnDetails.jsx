import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const TxnDetails = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1, id: 2 }]}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        className="mx-5 my-4"
        ListHeaderComponent={() => (
          <View style={styles.backIcon} className="">
            <TouchableOpacity className="my-auto">{icons.backArrow}</TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default TxnDetails;

const styles = StyleSheet.create({
  backIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 6,
    backgroundColor: "#232533",
    borderRadius: 10,
    width: 40,
    height: 'auto',
    borderWidth: 1.3,
    borderColor: '#46485c',
  },
});