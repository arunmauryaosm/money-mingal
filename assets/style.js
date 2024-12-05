import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  blueTextColor: {
    color : "#3a9ad9"
  },
  blueBackgroundColor: {
    backgroundColor : "#3a9ad9"
  },
  grayBackgroundColor: {
    backgroundColor: "#232533"
  },
  tabMarginBottom: {
    marginBottom: 92,
  },
  tabPaddingBottom: {
    paddingBottom: 60, 
  },
  floatingActionBtnBg: {
    backgroundColor: "#c2a71d"
  },
  modalBackground: {
    opacity: 0.5,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 10,
  },
});

// #333547  - progress bar bg color
// #232533  - modal bg color
// #1F1F1F  - card bg color
// #A0AECB  - cancel button bg color

export default globalStyles;