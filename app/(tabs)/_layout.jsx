import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { tabIcons } from "../../constants/tabIcon";

const TabBar = ({ state, descriptors, navigation }) => {
  const colors = { primary: "#3a9ad9", textColor: "#CDCDE0" };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabBarButton
            key={route.name}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? colors.primary : colors.textColor}
            label={label}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

const TabBarButton = (props) => {
  const { isFocused, routeName, color, label, onPress } = props;
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { damping: 10, stiffness: 80 });
  }, [isFocused]);

  // Animated styles
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1.2]);
    return {
      transform: [{ scale: scaleValue }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: isFocused ? "#3a9ad9" : "#CDCDE0",
    };
  });

  return (
    <Pressable onPress={onPress} style={styles.tabbarButton}>
      <Animated.View style={[animatedIconStyle]}>
        {tabIcons[routeName]({ color })}
      </Animated.View>
      <Animated.Text
        className={`${isFocused ? "font-psemibold" : "font-pregular"}`}
        style={[styles.label, animatedTextStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Budget"
        options={{
          title: "Budget",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          title: "Create",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Wallet"
        options={{
          title: "Wallet",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItem: "center",
    backgroundColor: "#232533",
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 35,
    borderCurve: "continuous",
    shadowColor: "white",
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabbarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 11,
    marginTop: 2,
  },
});
