import { StyleSheet } from "react-native";
import { FONT_BOLD, FONT_REGULAR } from "~shared/config/fontFamily";
import { colors } from "./colors";

export const wrapperContainer = {
  flex: 1,
  backgroundColor: colors.gray,
};

export const container = {
  width: '100%',
  paddingHorizontal: 35,
};

export const wrapperCenter = {
  alignItems: 'center',
  marginTop: 35,
}

export const flexRow = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export const spacing = StyleSheet.create({
  mt25: {
    marginTop: 25,
  },
  my25: {
    marginVertical: 25,
  },
  mt15: {
    marginTop: 15
  }
})

export const text = StyleSheet.create({
  textTitleDefault: {
    fontSize: 20,
    color: colors.black,
    ...FONT_BOLD
  },

  textHeading: {
    fontSize: 24,
    color: colors.black,
    ...FONT_BOLD
  }
})
