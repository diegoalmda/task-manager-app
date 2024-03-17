import React, { useState } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Accordion({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  const [opened, setOpened] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  function toggleAccordion() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpened(!opened);
    Animated.timing(rotation, {
      toValue: opened ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.iconContainer}>
            <Animated.View
              style={{ transform: [{ rotate: rotateInterpolation }] }}
            >
              <AntDesign name="caretdown" size={16} />
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {opened && (
        <View style={[styles.content]}>
          <Text style={styles.details}>{details}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    opacity: 0.65,
  },
  title: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  content: {
    marginTop: 8,
  },
  container: {
    width: "90%",
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
  },
});
