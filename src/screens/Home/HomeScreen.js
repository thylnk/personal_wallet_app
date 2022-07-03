import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import Button from "~components/atoms/Button";
import BoxItem from "~components/molecules/MoneyBox/BoxItem";
import TransactionItem from "~components/molecules/Transaction/TransactionItem";
import { logout } from "~redux/slices/user.slice";
import api from "~shared/config/api";
import {
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_REGULAR,
} from "~shared/config/fontFamily";
import { SAVEMONEY, TRANSACTION, USER } from "~shared/constants/endpoints";
import { colors } from "~shared/styles/colors";
import {
  container,
  flexRow,
  spacing,
  text,
  wrapperContainer,
} from "~shared/styles/common";
import { getAccessToken } from "~shared/utils/storerage";

const Logout = () => <Icon name="logout" size={42} />;

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [listTrans, setListTrans] = useState([]);
  const [listSave, setListSave] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    id: 1,
    avatar: "",
    full_name: "",
    address: "DN",
    total_money: "",
    currency_unit: "VND",
  });

  const fetchAllTrans = async () => {
    const access = await getAccessToken();
    try {
      while (true) {
        const data = await api.get(USER, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        setUser(data);
        const res = await api.get(TRANSACTION, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        setListTrans(res);
        const saveList = await api.get(SAVEMONEY, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        if (saveList) {
          setListSave(saveList.box_money)
        }
      }
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        dispatch(logout());
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAllTrans();
      return () => {
        setIsLoading(false);
      };
    }, [isLoading]),
  );

  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View
        style={[
          styles.flexRow,
          { paddingHorizontal: 35, marginTop: 55, paddingBottom: 15 },
        ]}
      >
        <View style={styles.wrapperTitle}>
          <Text style={styles.textUser} numberOfLines={1} ellipsizeMode="tail">
            Hi {user.full_name}
          </Text>
          <Text style={styles.textTitle}>Welcome,</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { setIsLoading(false); dispatch(logout()) }}>
            <Logout />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.currentBalanceWrapper}>
          <View>
            <Text style={styles.textWhite}>Total Balance</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={[styles.textTotal, { paddingRight: 6 }]}>VND</Text>
            <Text style={styles.textTotal}>{user.total_money}</Text>
          </View>
        </View>

        <View style={spacing.mt25}>
          <View style={styles.flexRow}>
            <Text style={text.textTitleDefault}>Recently Transactions</Text>
            <Button
              value="All"
              onClick={() =>
                navigation.navigate("MainScreen", { screen: "Transaction" })
              }
            />
          </View>
          <View>
            {listTrans?.map((item, index) => {
              if (index > 2) return;
              return (
                <TransactionItem
                  type={+item.type_id}
                  money={item.money}
                  key={item.created_at + item.id + item.name}
                  id={item.id}
                  navigation={navigation}

                />
              );
            })}
          </View>
        </View>

        <View style={spacing.my25}>
          <View style={styles.flexRow}>
            <Text style={text.textTitleDefault}>Money Box</Text>
            <Button
              value="All"
              onClick={() =>
                navigation.navigate("MainScreen", { screen: "MoneyBox" })
              }
            />
          </View>
          <View>
            {listSave &&
              listSave.map((item) => {
                return (
                  <BoxItem
                    key={item.name + item.id}
                    name={item.name}
                    id={item.id}
                    goal={item.money_goal}
                    saving={item.saving_money}
                    navigation={navigation}
                  />
                );
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    ...wrapperContainer,
  },
  container: {
    ...container,
  },
  textTitle: {
    color: colors.black,
    fontSize: 20,
    textAlign: "left",
    ...FONT_BOLD,
  },
  textUser: {
    color: colors.black,
    fontSize: 16,
    textAlign: "left",
    ...FONT_REGULAR,
  },

  textWhite: {
    color: colors.white,
    ...FONT_MEDIUM,
    fontSize: 20,
    lineHeight: 19,
  },

  totalContainer: {
    flexDirection: "row",
    margin: "auto",
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  textTotal: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 24,
    ...FONT_BOLD,
  },

  wrapperCenter: {
    alignItems: "center",
    marginTop: 35,
  },

  flexRow: {
    ...flexRow,
  },

  wrapperTitle: {
    width: "70%",
  },

  currentBalanceWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondaryColor,
    textAlign: "center",
    width: "100%",
    marginTop: 15,
    height: 110,
    borderRadius: 10,
  },
});
