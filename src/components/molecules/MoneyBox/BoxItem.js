import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { FONT_BOLD, FONT_MEDIUM } from "~shared/config/fontFamily";
import { colors } from "~shared/styles/colors";
import { flexRow } from "~shared/styles/common";

export default function BoxItem(props) {
  const { name, id, goal, saving, navigation } = props;

  const leftSwipe = () => {
    return (
      <View
        style={{
          // width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditMoneyBox", { action: "edit", id: id })
          }
        >
          <View style={{ marginLeft: 10 }}>
            <View style={styles.btnEditWrapper}>
              <Text style={[styles.textTitle, { color: colors.white }]}>
                Edit
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={leftSwipe}>
      <View style={styles.flexRow}>
        <View style={{ width: "40%" }}>
          <Text style={styles.textTitle} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
        </View>
        <View style={{ width: "60%", alignItems: "flex-end" }}>
          <Text
            numberOfLines={1}
            style={[styles.text, { color: colors.black }]}
          >
            Saved: {saving}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.text, { color: colors.lightPurple }]}
          >
            Total: {goal}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
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

  // btnDelWrapper: {
  //   height: 48,
  //   backgroundColor: colors.lightPurple,
  //   borderRadius: 15,
  //   paddingHorizontal: 14,
  //   paddingVertical: 15,
  //   marginTop: 15,
  // },

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
    ...FONT_BOLD,
  },

  text: {
    fontSize: 14,
    lineHeight: 17,
    paddingBottom: 2,
    ...FONT_MEDIUM,
  },
});
