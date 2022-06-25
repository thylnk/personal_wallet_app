import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import api from "~shared/config/api";
import { TRANSACTION } from "~shared/constants/endpoints";

export default function TransactionModal({ route, navigation }) {
  const dispatch = useDispatch()
  const { title } = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [type, setType] = useState("");
  const [color, setColors] = useState("");
  const [date, setDate] = useState(new Date());
  const [params, setParams] = useState(
    {
      "name": "",
      "money": 0,
      "type": 1,
      "status": "COMPLETED",
      "note": "",
      "currency_unit": "VND",
      "created_at": new Date().toISOString().slice(0, 10),
      "note": ""
    }
  )

  const typeList = [
    {
      value: "Eating/Drinking",
      label: 1,
    },
    {
      value: "Purchase",
      label: 2,
    },
    {
      value: "Transport",
      label: 3,
    },
    {
      value: "Income",
      label: 4,
    },
  ];

  const handleCheckType = () => {
    const currentType = typeList.find((item) => item.value == type)
    if (currentType) {
      setParams((prev) => { return { ...prev, type: currentType.label } })
    }
  }

  const handleSubmit = async () => {
    handleCheckType()
    console.log(params)
    try {
      const res = await api.post(TRANSACTION, params)
      if (res) {
        navigation.goBack();
      }
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(logout())
      }
      console.log(error)
    }
  }

  useEffect(() => {
    // handleSubmit();
  }, [])

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
          { marginTop: 35, paddingBottom: 15, height: "10%" },
        ]}
      >
        <View style={styles.wrapperTitle}>
          <TouchableOpacity
            style={{ width: '8%' }}
            onPress={() => navigation.goBack()}
          >
            <Back />
          </TouchableOpacity>
          <View style={{ width: '90%' }}>
            <Text style={[text.textHeading, { textAlign: 'center' }]}>{title}</Text>
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
                placeholder="Enter name of transaction"
                customStyle={{ marginTop: 10 }}
                value={params.name}
                onChange={
                  (value) => { setParams((prev) => { return { ...prev, name: value } }) }
                }
              />
            </View>
            <View style={styles.spacerStyle}></View>
            <View>
              <Text style={text.textLarger}>Transaction Type</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <SelectList
                data={typeList}
                setSelected={(value) => { setType(value) }}
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
          <View>
            <View>
              <Text style={text.textLarger} >Date</Text>
            </View>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <InputPrimary
                customStyle={{ marginTop: 10 }}
                editable={false}
                value={date.toISOString().slice(0, 10)}
              />
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onChange={(event, date) => {
                setDate(date);
                setShowDatePicker(false);
                setParams((prev) => { return { ...prev, ["created_at"]: date.toISOString().slice(0, 10) } })
              }}
            />
          )}
          <View style={styles.spacerStyle} />
          <View>
            <View>
              <Text style={text.textLarger}>Amount</Text>
            </View>
            {/* <TextInput keyboardType="numeric" placeholder="200" /> */}
            <InputPrimary
              placeholder="Enter amount"
              customStyle={{ marginTop: 10 }}
              value={params.money + ""}
              onChange={
                (value) => { setParams((prev) => { return { ...prev, money: +value } }) }
              }
            />
          </View>
          <View style={styles.spacerStyle}></View>

          <View>
            <View>
              <Text style={text.textLarger}>Note</Text>
            </View>
            <InputPrimary
              placeholder="Enter note"
              customStyle={{ marginTop: 10 }}
              value={params.note}
              onChange={
                (value) => { setParams((prev) => { return { ...prev, note: value } }) }
              }
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Button value="Save" onClick={handleSubmit} />
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
    marginBottom: 20,
  },
});
