import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import ApplicationStateContext from "./context/applicationStateContext";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApplicationStateContext>
        <Navigation />
        <StatusBar />
      </ApplicationStateContext>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
