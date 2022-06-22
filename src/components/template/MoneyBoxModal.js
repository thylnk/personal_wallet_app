import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { Provider } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import SelectList from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Back } from "~shared/constants/icon";
import {
  container,
  flexRow,
  text,
  wrapperContainer,
} from "~shared/styles/common";
import Button from "~components/atoms/Button";
import InputPrimary from "~components/atoms/InputPrimary";
import { colors } from "~shared/styles/colors";
import { FONT_MEDIUM } from "~shared/config/fontFamily";

export default function MoneyBoxModal({ route, navigation }) {
  const { title } = route.params;

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [type, setType] = useState("");
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [color, setColors] = useState("");
  const [date, setDate] = useState(new Date());

  const daily = [
    {
      label: "DAY",
      value: "Everyday",
    },
    {
      label: "WEEK",
      value: "Every week",
    },
    {
      label: "MONTH",
      value: "Every month",
    },
    {
      label: "YEAR",
      value: "Every year",
    },
  ];

  const showMode = () => { };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      style={styles.wrapperContainer}
    >
      <View
        style={[
          styles.flexRow,
          { marginTop: 55, paddingBottom: 15, height: "10%" },
        ]}
      >
        <View style={styles.wrapperTitle}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.goBack()}
          >
            <Back />
          </TouchableOpacity>
          <View style={{ width: "80%", margin: "auto" }}>
            <Text style={text.textHeading}>Add New Money Box</Text>
          </View>
        </View>
      </View>
      <Provider style={{ paddingBottom: 20 }}>
        <ScrollView>
          <View>
            <View>
              <View>
                <Text style={text.textLarger}>Name</Text>
              </View>
              <InputPrimary
                placeholder="Enter name"
                customStyle={{ marginTop: 5 }}
              />
            </View>
            <View style={styles.spacerStyle}></View>
            <View>
              <View>
                <Text style={text.textLarger}>Budget</Text>
              </View>
              <InputPrimary
                placeholder="Enter your budget"
                customStyle={{ marginTop: 5 }}
              />
            </View>
            <View style={styles.spacerStyle} />
            <View>
              <View>
                <Text style={text.textLarger}>Money Goal</Text>
              </View>
              <InputPrimary
                placeholder="Enter money goal"
                customStyle={{ marginTop: 5 }}
              />
            </View>
            <View style={styles.spacerStyle}></View>
            <View>
              <View>
                <Text style={text.textLarger}>Saving money</Text>
              </View>
              <InputPrimary
                placeholder="Enter saving money"
                customStyle={{ marginTop: 5 }}
              />
            </View>
            <View style={styles.spacerStyle}></View>
            <View>
              <Text style={text.textLarger}>Repeated Time</Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <SelectList
                data={daily}
                setSelected={setType}
                dropdownStyles={{ backgroundColor: colors.white }}
                dropdownItemStyles={{
                  marginHorizontal: 10,
                  borderBottomWidth: 0.3,
                  paddingBottom: 10,
                  borderBottomColor: colors.lightDark,
                }}
                dropdownTextStyles={{
                  color: colors.black,
                  ...FONT_MEDIUM,
                  fontSize: 18,
                }}
                boxStyles={{
                  backgroundColor: colors.secondaryColor,
                  borderRadius: 15,
                  paddingVertical: 14,
                }}
                inputStyles={{
                  color: colors.white,
                  ...FONT_MEDIUM,
                  fontSize: 18,
                }}
              />
            </View>
          </View>
          <View style={styles.spacerStyle} />
          <View style={{ marginTop: 35 }}>
            <Button value="Save" />
          </View>
        </ScrollView>
      </Provider>
    </KeyboardAvoidingView>
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
    marginBottom: 10,
  },
});
