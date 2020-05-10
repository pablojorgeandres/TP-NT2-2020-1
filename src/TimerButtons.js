import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

class TimerButtons extends Component {
  state = {};
  render() {
      return (
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button onPress={this.props.playClicked} name="play" title="Play"></Button>
          </View>
          <View style={styles.buttons}>
            <Button onPress={this.props.pauseClicked} name="pause" title="Pause"></Button>
          </View>
          <View style={styles.buttons}>
            <Button onPress={this.props.resetClicked} name="stop" title="Stop"></Button>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "-20%",
    width: "50%",
  },
  buttons: {
    width: "35%",
  }
});
export default TimerButtons;
