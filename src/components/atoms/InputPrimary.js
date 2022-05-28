import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '~shared/config/colors';
import { FONT_BOLD } from '~shared/config/fontFamily';

const InputPrimary = (props) => {

  const { placeholder, secureTextEntry, value, onChange, icon } = props

  return (
    <View style={styles.container}>
      <TextInput style={styles.text} placeholder={placeholder} placeholderTextColor={colors.white} secureTextEntry={secureTextEntry}></TextInput>
      {/* {icon} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // width: 350,
    backgroundColor: colors.secondaryColor,
    marginTop: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
    color: colors.white,
    fontFamily: FONT_BOLD
  }
});


InputPrimary.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  icon: PropTypes.elementType,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

InputPrimary.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  icon: <></>,
  value: '',
  onChange: () => { },
};

export default InputPrimary;