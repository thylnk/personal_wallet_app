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
import { Back } from "~shared/constants/icon";
import {
  container,
  flexRow,
  text,
  wrapperContainer,
} from "~shared/styles/common";
import Button from "~components/atoms/Button";
import InputPrimary from "~components/atoms/InputPrimary";
import { getAccessToken } from "~shared/utils/storerage";
import api from "~shared/config/api";
import { SAVEMONEY } from "~shared/constants/endpoints";
import { useDispatch } from "react-redux";

export default function EditMomeyBoxModal({ route, navigation }) {
  const { title, id } = route.params;
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState({
    "name": "",
    "budget": "",
    "money_goal": "",
    "saving_money": "",
    "daily": "WEEK"
  })

  const fetchData = async () => {
    const access = await getAccessToken();
    try {
      const res = await api.get(`/saving_money/${id}/`,
        {
          headers: {
            "Authorization": `Bearer ${access}`
          }
        })
      const data = res.saving_money
      setParams({
        "name": data.name,
        "budget": data.budget,
        "money_goal": data.money_goal,
        "saving_money": data.saving_money,
        "daily": data.daily
      })
      setTotal(+data?.user?.total_money)
    } catch (error) {
      if (error.status === 401) {
        dispatch(logout())
      }
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const access = await getAccessToken();
    if (params.saving_money > total) {
      alert("The balance in the account is not enough!");
      return
    }
    try {
      const res = await api.put(`${SAVEMONEY}${id}/`, JSON.stringify(params),
        {
          headers: {
            "Authorization": `Bearer ${access}`
          }
        })
      if (res) {
        navigation.goBack();
      }
    } catch (error) {
      if (error.status === 401) {
        dispatch(logout())
      }
      console.log(error)
    }
  }


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
          <View style={{ flex: 2.4, margin: "auto" }}>
            <Text style={text.textHeading}>Edit Money Box</Text>
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
                value={params.name}
                onChange={(value) => setParams((prev) => { return { ...prev, name: value } })}
                placeholder="Enter name"
                customStyle={{ marginTop: 5 }}
              />
            </View>
            <View style={styles.spacerStyle}></View>
            {/* <View>
              <View>
                <Text style={text.textLarger}>Budget</Text>
              </View>
              <InputPrimary
                value={params.budget}
                onChange={(value) => setParams((prev) => { return { ...prev, budget: +value } })}
                placeholder="Enter your budget"
                customStyle={{ marginTop: 5 }}
              />
            </View> */}
            <View style={styles.spacerStyle} />
            <View>
              <View>
                <Text style={text.textLarger}>Money Goal</Text>
              </View>
              <InputPrimary
                placeholder="Enter money goal"
                onChange={(value) => setParams((prev) => { return { ...prev, money_goal: +value } })}
                value={"" + params.money_goal}
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
                value={"" + params.saving_money}
                onChange={(value) => setParams((prev) => { return { ...prev, saving_money: +value } })}
                customStyle={{ marginTop: 5 }}
              />
            </View>
            <View style={styles.spacerStyle}></View>
            <View>
              <Text style={text.textLarger}>Repeated Time</Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <InputPrimary
                value="Weekly"
                customStyle={{ marginTop: 5 }}
              />
            </View>
          </View>
          <View style={styles.spacerStyle} />
          <View style={{ marginTop: 25 }}>
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
    marginBottom: 10,
  },
});
