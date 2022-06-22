import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import TransactionItem from "~components/molecules/Transaction/TransactionItem.js";
import { container, flexRow, spacing, text, wrapperContainer } from "~shared/styles/common";

const PlusSquare = () => <Icon name="plussquare" size={42} />

export default function TransactionScreen({ navigation }) {
  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View style={[styles.flexRow]}>
        <View style={styles.wrapperTitle}>
          <Text style={text.textHeading}>Transactions</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { title: 'Add New Transaction', action: 'add' })} >
          <PlusSquare />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={spacing.my25}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { title: 'Edit Transaction', action: 'edit', id: 1 })} >
              <TransactionItem />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { title: 'Edit Transaction', action: 'edit', id: 1 })} >
              <TransactionItem />
            </TouchableOpacity>
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
