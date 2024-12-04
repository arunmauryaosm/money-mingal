import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { icons } from "../constants";

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 500,
}) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedView, bodyStyle, style]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.wrapper}
      >
        {children}
      </View>
    </Animated.View>
  );
}

function Item() {
  return (
    <View style={styles.box}>
      <Text className="text-white">Hello</Text>
    </View>
  );
}

function Parent({ open }) {
  return (
    <View style={styles.parent}>
      <AccordionItem isExpanded={open} viewKey="Accordion">
        <Item />
      </AccordionItem>
    </View>
  );
}

const Accordion = () => {
  const open = useSharedValue(false);
  const onPress = () => {
    open.value = !open.value;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <>
          <LinearGradient
            colors={["#1e293b", "#c2a71d"]}
            // colors={["#1e293b", "#10b981"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0.5 }}
            style={{ borderRadius: 20 }}
          >
            <View
              className="d-flex flex-col justify-around p-4"
              style={styles.boxContainer}
            >
              <View className="d-flex flex-row gap-3">
                <View className="bg-black p-2 rounded-xl">{icons.wallet}</View>
                <Text className="text-white font-psemibold my-auto">₹ 20000</Text>
              </View>
              <Text className="text-gray-50 font-pregular w-[60%]">
                Your selected salary date is{" "}
                <Text className="text-blue-300 font-psemibold">
                  December 15th
                </Text>
              </Text>
            </View>
          </LinearGradient>
        </>
      </TouchableOpacity>

      {/* <View style={styles.content}>
        <Parent open={open} />
      </View> */}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  boxContainer: {
    width: "auto",
    height: 150,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    width: 200,
  },
  wrapper: {
    width: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  animatedView: {
    width: "100%",
    overflow: "hidden",
  },
  box: {
    height: 120,
    width: 120,
    color: "#f8f9ff",
    backgroundColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
});
