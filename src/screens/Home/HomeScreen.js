import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from "react-redux";
import Button from "~components/atoms/Button";
import BoxItem from "~components/molecules/MoneyBox/BoxItem";
import TransactionItem from "~components/molecules/Transaction/TransactionItem";
import { logout } from "~redux/slices/user.slice";
import api from "~shared/config/api";
import { FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from "~shared/config/fontFamily";
import { TRANSACTION } from "~shared/constants/endpoints";
import { colors } from "~shared/styles/colors";
import { container, flexRow, spacing, text, wrapperContainer } from "~shared/styles/common";
import { getAccessToken } from "~shared/utils/storerage";

const Logout = () => <Icon name="logout" size={42} />

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [listTrans, setListTrans] = useState([]);

  const fetchAllTrans = async () => {
    const access = await getAccessToken();
    try {
      const res = await api.get(TRANSACTION, {
        headers: {
          Authorization: 'Bearer ' + access
        } //the token is a variable which holds the token
      });
      setListTrans(res);
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        dispatch(logout())
      }
    }
  }

  useEffect(() => {
    fetchAllTrans()
  }, []);

  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View style={[styles.flexRow, { paddingHorizontal: 35, marginTop: 55, paddingBottom: 15 }]}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.textUser} numberOfLines={1} ellipsizeMode='tail'>Hi Thy Le Ngoc Khanh</Text>
          <Text style={styles.textTitle}>Welcome,</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch(logout())}>
            <Logout />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.currentBalanceWrapper}>
          <View><Text style={styles.textWhite}>Total Balance</Text></View>
          <View style={styles.totalContainer}>
            <Text style={[styles.textTotal, { paddingRight: 6 }]}>VND</Text>
            <Text style={styles.textTotal}>300.0000.000</Text>
          </View>
        </View>

        <View style={spacing.mt25}>
          <View style={styles.flexRow}>
            <Text style={text.textTitleDefault}>Recently Transactions</Text>
            <Button value="All"
              onClick={() => navigation.navigate('MainScreen', { screen: 'Transaction', })} />
          </View>
          <View>
            {
              listTrans?.map((item, index) => {
                return <TransactionItem type={+item.type_id} money={item.money} key={item.created_at} />
              })
            }
          </View>
        </View>

        <View style={spacing.my25}>
          <View style={styles.flexRow}>
            <Text style={text.textTitleDefault}>Money Box</Text>
            <Button value="All"
              onClick={() => navigation.navigate('MainScreen', { screen: 'MoneyBox', })} />
          </View>
          <View>
            <BoxItem />
            <BoxItem />
            <BoxItem />
          </View>
        </View>
      </ScrollView>
    </View>
  )
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
    flexDirection: 'row',
    margin: 'auto',
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  textTotal: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 24,
    ...FONT_BOLD
  },

  wrapperCenter: {
    alignItems: "center",
    marginTop: 35,
  },

  flexRow: {
    ...flexRow
  },

  wrapperTitle: {
    width: '70%',
  },

  currentBalanceWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryColor,
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
    height: 110,
    borderRadius: 10,
  }
});
