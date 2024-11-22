import { View, Text } from "react-native";
import React, { useState } from "react";
import { Screen1Style } from "../Styles/Screen1Style";

const Screen1 = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [timeNotation, setTimeNotation] = useState("AM");

  const updateClock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = hours > 12 ? "PM" : "AM";
    setHour(hours < 10 ? "0" + hours : hours);
    setMinute(minutes < 10 ? "0" + minutes : minutes);
    setSecond(seconds < 10 ? "0" + seconds : seconds);
    setTimeNotation(time);
  };

  setInterval(updateClock, 1000);
  return (
    <View style={Screen1Style.container}>
      <Text style={Screen1Style.hour}>{hour}</Text>
      <Text style={Screen1Style.minute}>{minute}</Text>
      <Text style={Screen1Style.second}>{second}</Text>
      <Text style={Screen1Style.timeNotation}>{timeNotation}</Text>
    </View>
  );
};

export default Screen1;
