import PropTypes from 'prop-types'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors } from '~shared/styles/colors'
import { FONT_REGULAR } from '~shared/config/fontFamily'

const InputPrimary = (props) => {
  const {
    placeholder,
    secureTextEntry,
    value,
    onChange,
    icon,
    isIcon,
    customStyle,
    editable
  } = props

  return (
    <View style={[styles.container, customStyle]}>
      <TextInput
        style={[styles.text, isIcon ? { width: '80%' } : { width: '100%' }]}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={colors.white}
        secureTextEntry={secureTextEntry}
        editable={editable}></TextInput>
      <View style={styles.icon}>{icon}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
    color: colors.white,
    ...FONT_REGULAR,
  },
  icon: {
    paddingRight: 22,
  },
})

InputPrimary.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isIcon: PropTypes.bool,
  style: PropTypes.object,
  editable: PropTypes.bool
}

InputPrimary.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  icon: <></>,
  value: '',
  onChange: () => { },
  isIcon: false,
  customStyle: { marginTop: 15 },
  editable: true
}

export default InputPrimary
