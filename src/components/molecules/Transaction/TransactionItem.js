import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { FONT_BOLD, FONT_MEDIUM } from "~shared/config/fontFamily"
import { Coffee } from "~shared/constants/icon.js"
import { typeList } from "~shared/constants/transaction"
import { colors } from "~shared/styles/colors"
import { flexRow } from "~shared/styles/common"

export default function TransactionItem(props) {

  const { type, money } = props

  const handleCheckType = (type) => {
    const currenttype = typeList.find((item) => item.id === type)
    return currenttype
  }

  const rightSwipe = () => {
    return (
      <View>
        <TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <View style={styles.btnDelWrapper}>
              <Text style={styles.textTitle}>Delete</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ marginRight: 10 }}>
            <View style={styles.btnEditWrapper}>
              <Text style={[styles.textTitle, { color: colors.white }]}>Edit</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const leftSwipe = () => {
    return (
      <View style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <View style={styles.btnEditWrapper}>
              <Text style={[styles.textTitle, { color: colors.white }]}>Edit</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <View style={styles.btnDelWrapper}>
              <Text style={styles.textTitle}>Delete</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Swipeable renderRightActions={leftSwipe}>
      <View style={styles.flexRow}>
        <View style={{ flex: 0.75 }}><Coffee /></View>
        <View style={{ flex: 2 }}>
          <Text style={styles.textTitle}>{handleCheckType(type).value}</Text>
          <Text style={styles.textDate}>19/06/2022</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text numberOfLines={1} style={[styles.text, { color: colors.lightPurple }]}>{money}</Text>
        </View>
      </View >
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  flexRow: {
    ...flexRow,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15
  },

  btnDelWrapper: {
    height: 48,
    backgroundColor: colors.lightPurple,
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 15,
    marginTop: 15,
  },

  btnEditWrapper: {
    height: 48,
    backgroundColor: colors.secondaryColor,
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