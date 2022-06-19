import { StyleSheet, Text, View } from "react-native"
import { FONT_BOLD, FONT_MEDIUM } from "~shared/config/fontFamily"
import { Coffee } from "~shared/constants/icon.js"
import { colors } from "~shared/styles/colors"
import { flexRow } from "~shared/styles/common"

export default function TransactionItem() {
  return (
    <View style={styles.flexRow}>
      <View style={{ flex: 0.75 }}><Coffee /></View>
      <View style={{ flex: 2 }}>
        <Text style={styles.textTitle}>Coffee/Eating</Text>
        <Text style={styles.textDate}>19/06/2022</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text numberOfLines={1} style={[styles.text, { color: colors.lightPurple }]}>+ 300.000.000</Text>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  flexRow: {
    ...flexRow,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },

  textTitle: {
    fontSize: 16,
    lineHeight: 17,
    ...FONT_BOLD
  },

  textDate: {
    paddingTop: 2,
    fontSize: 14,
    lineHeight: 17,
    ...FONT_MEDIUM,
    color: colors.lightPurple
  },

  text: {
    fontSize: 16,
    lineHeight: 17,
    ...FONT_MEDIUM,
    marginLeft: 'auto'
  },
})