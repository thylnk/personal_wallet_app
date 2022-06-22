import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Button from "~components/atoms/Button";
import BoxItem from "~components/molecules/MoneyBox/BoxItem";
import TransactionItem from "~components/molecules/Transaction/TransactionItem";
import { FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from "~shared/config/fontFamily";
import { colors } from "~shared/styles/colors";
import { container, flexRow, spacing, text, wrapperContainer } from "~shared/styles/common";

const PlusSquare = () => <Icon name="plussquare" size={42} />

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View style={[styles.flexRow, { paddingHorizontal: 35, marginTop: 55, paddingBottom: 15 }]}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.textUser} numberOfLines={1} ellipsizeMode='tail'>Hi Thy Le Ngoc Khanh</Text>
          <Text style={styles.textTitle}>Welcome,</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { title: 'Add new transaction' })} >
          <PlusSquare />
        </TouchableOpacity>
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
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
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
