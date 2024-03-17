import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";

export function Picker() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Java", value: "java" },
    { label: "JavaScript", value: "js" },
    { label: "Python", value: "python" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.picker}
        textStyle={styles.pickerText}
        dropDownContainerStyle={styles.dropDownContainer}
        dropDownStyle={styles.dropDown}
        placeholder="Selecione uma opção"
        arrowIconContainerStyle={styles.arrowIconContainer}
        customArrowDown={() => (
          <Ionicons name="caret-down-outline" size={24} color="gray" />
        )}
        customArrowUp={() => (
          <Ionicons name="caret-up-outline" size={24} color="gray" />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
  },
  pickerText: {
    fontSize: 16,
    color: "black",
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    marginTop: 10,
  },
  dropDown: {
    backgroundColor: "white",
  },
  arrowIconContainer: {
    paddingHorizontal: 10,
  },
});
