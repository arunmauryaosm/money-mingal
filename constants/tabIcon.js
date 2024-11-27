import { AntDesign, Entypo, Feather, FontAwesome5, FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const tabIcons = {
    Home: (props) => (
      // <AntDesign name="home" size={26} {...props} />
      <MaterialIcons name="space-dashboard" size={26} {...props} />
    ),
    Budget: (props) => (
      <Entypo name="circular-graph" size={26} {...props} />
    ),
    Create: (props) => (
      <Feather name="plus-circle" size={26} {...props} />
    ),
    Wallet: (props) => (
      <Ionicons name="wallet-outline" size={26} {...props} />
    ),
    Profile: (props) => (
      <FontAwesome5 name="user" size={26} {...props} />
    ),
  };