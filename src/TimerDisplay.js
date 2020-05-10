import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class TimerDisplay extends Component {
  state = {};
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          {Math.floor(this.props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // padding: "0 auto",
    borderColor: "white",
    borderRadius: 100,
    borderWidth: 5,
    maxWidth: 200,
    minWidth: 200,
    maxHeight: 200,
    minHeight: 200,
    flexDirection: "column",
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  textStyle: {
    fontFamily: 'Verdana',
    color: "white",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 75,
  }
});

export default TimerDisplay;
