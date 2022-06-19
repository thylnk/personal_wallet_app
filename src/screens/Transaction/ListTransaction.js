import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Button from "~components/atoms/Button";
import BoxItem from "~components/molecules/MoneyBox/BoxItem";
import TransactionItem from "~components/molecules/Transaction/TransactionItem";
import { FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from "~shared/config/fontFamily";
import { Coffee } from '~shared/constants/icon';
import { colors } from "~shared/styles/colors";
import { container, flexRow, spacing, text, wrapperContainer } from "~shared/styles/common";

const PlusSquare = () => <Icon name="plussquare" size={42} />

export default function TransactionScreen() {
  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View style={[styles.flexRow]}>
        <View style={styles.wrapperTitle}>
          <Text style={text.textHeading}>Transactions</Text>
        </View>
        <TouchableOpacity>
          <PlusSquare />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={spacing.mt25}>
          <View>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
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

  flexRow: {
    ...flexRow,
    paddingHorizontal: 35,
    marginTop: 55
  },

});
