import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

function SplashScreen(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.bg}
      source={require("../assets/lalaSplash.jpg")}
    >
      <Text style={styles.text}>Play me some music</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // position: "absolute",
    // bottom: 20,
  },
  text: {},
});

export default SplashScreen;
