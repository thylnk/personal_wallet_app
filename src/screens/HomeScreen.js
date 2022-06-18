import { ScrollView, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "~shared/styles/colors";
import { FONT_REGULAR } from "~shared/config/fontFamily";
import { container } from "~shared/styles/common";

const PlusSquare = () => <Icon name="plus-square" size={36} />

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Text>Hi Thy Le Ngoc Khanh</Text>
          <Text>Welcome,</Text>
        </View>
        <PlusSquare />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...container
  },
  image: {
    width: "100%",
    marginBottom: 20,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    paddingVertical: 14,
    textAlign: "center",
    ...FONT_REGULAR,
  },
  wrapperCenter: {
    alignItems: "center",
    marginTop: 35,
  },
});
