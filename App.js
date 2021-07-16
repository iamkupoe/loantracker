import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/components/screens/HomeScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import ProfileScreen from "./src/components/screens/ProfileScreen";
import SignupScreen from "./src/components/screens/SignupScreen";
import StartScreen from "./src/components/screens/StartScreen";
import TabScreen from "./src/components/screens/TabScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<StartScreen />*/}
      {/*<LoginScreen />*/}
      {/*<SignupScreen />*/}
      {/*<HomeScreen />*/}
      {/*<ProfileScreen />*/}
      <TabScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
