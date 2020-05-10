import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";

class TimerHeader extends Component {
  handleText = () => {
    if (this.props.intervalType == "focus") {
      if (this.props.running === true) {
        return "Enfócate!";
      } else if (this.props.running === false) {
        return "POMODORO";
      }
    } else {
      if (this.props.running === true) {
        return "Relájate!";
      } else if (this.props.running === false) {
        return "Te Relajas ahora?";
      }
    }
  };
  render() {
    let displayText = this.handleText();
    return <Text style={styles.textStyle}>{displayText}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 29,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: "Verdana",
    marginBottom: "2%",
  }
});
export default TimerHeader;
