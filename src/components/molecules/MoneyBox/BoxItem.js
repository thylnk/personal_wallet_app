import { StyleSheet, Text, View } from "react-native"
import { FONT_BOLD, FONT_MEDIUM } from "~shared/config/fontFamily"
import { Coffee } from "~shared/constants/icon"
import { colors } from "~shared/styles/colors"
import { flexRow } from "~shared/styles/common"

const BoxItem = () => {
  return (
    <View style={styles.flexRow}>
      <View style={{ width: '40%' }}>
        <Text style={styles.textTitle} numberOfLines={2} ellipsizeMode="tail">Shopping</Text>
      </View>
      <View style={{ width: '60%', alignItems: "flex-end" }}>
        <Text numberOfLines={1} style={[styles.text, { color: colors.black }]}>Saved: 300.000.000</Text>
        <Text numberOfLines={1} style={[styles.text, { color: colors.lightPurple }]}>Total: 300.000.000</Text>
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

  text: {
    fontSize: 14,
    lineHeight: 17,
    paddingBottom: 2,
    ...FONT_MEDIUM
  },
})

export default BoxItem