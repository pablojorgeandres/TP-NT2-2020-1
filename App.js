import React from "react";
import { StyleSheet, View } from "react-native";
import Pomodoro from "./src/pomodoro";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Pomodoro />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});