import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import BoxItem from "~components/molecules/MoneyBox/BoxItem";
import { container, flexRow, spacing, text, wrapperContainer } from "~shared/styles/common";

const PlusSquare = () => <Icon name="plussquare" size={42} />

export default function MoneyBoxScreen({ navigation }) {
  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View style={styles.flexRow}>
        <View style={{ alignContent: 'center' }}>
          <Text style={text.textHeading}>Money Box</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddMoneyBox', { title: 'Add New Money Box', action: 'add' })} >
          <PlusSquare />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={spacing.my25}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('EditMoneyBox', { action: 'edit', id: 1 })} >
              <BoxItem />
            </TouchableOpacity>
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

  flexRow: {
    ...flexRow,
    paddingHorizontal: 35,
    marginTop: 55
  },

});
