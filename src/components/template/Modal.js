import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";
import { Provider } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_REGULAR,
} from "~shared/config/fontFamily";
import { Back } from "~shared/constants/icon";
import { colors } from "~shared/styles/colors";
import {
  container,
  flexRow,
  text,
  wrapperContainer,
} from "~shared/styles/common";

export default function Modal({ route, navigation }) {
  const { title } = route.params;

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [type, setType] = useState("");
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [colors, setColors] = useState("");
  const [date, setDate] = useState(new Date());

  const colorList = [
    {
      label: "White",
      value: "white",
    },
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Orange",
      value: "orange",
    },
  ];

  const typeList = [
    {
      label: "Income",
      value: "income",
    },
    {
      label: "Expense",
      value: "expense",
    },
  ];

  const showMode = () => { };

  return (
    <View style={styles.wrapperContainer}>
      <View style={[styles.flexRow, { marginTop: 55, paddingBottom: 15 }]}>
        <View style={styles.wrapperTitle}>
          <View style={{ flex: 1 }}>
            <Back />
          </View>
          <View style={{ width: "80%", margin: "auto" }}>
            <Text style={text.textHeading}>{title}</Text>
          </View>
        </View>
      </View>

      <Provider>
        <View>
          <View style>
            <Text>Category</Text>
          </View>
          <View>
            <DropDown
              mode={"outlined"}
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={colors}
              setValue={setColors}
              list={colorList}
            />
          </View>
        </View>
        <View style={styles.spacerStyle} />
        <View>
          <View style>
            <Text>Transaction Type</Text>
          </View>
          <View>
            <DropDown
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={type}
              setValue={setType}
              list={typeList}
            />
          </View>
        </View>
        <View style={styles.spacerStyle} />
        <View>
          <View style>
            <Text>Date</Text>
          </View>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput editable={false} value={date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })} />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onChange={(event, date) => {
              setDate(date), setShowDatePicker(false);
            }}
          />
        )}

        <View>
          <View style>
            <Text>Date</Text>
          </View>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              // onChangeText={onChangeNumber}
              value={0}
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
          </TouchableOpacity>
        </View>
      </Provider>
      <Button title="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    ...wrapperContainer,
    paddingHorizontal: 20,
  },
  container: {
    ...container,
  },
  flexRow: {
    ...flexRow,
  },
  wrapperTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  spacerStyle: {
    marginBottom: 15,
  },
});
