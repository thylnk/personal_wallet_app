import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '~shared/config/colors';
import { FONT_REGULAR } from '~shared/config/fontFamily';

const InputPrimary = (props) => {
  const { placeholder, secureTextEntry, value, onChange, icon, isIcon } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.text, isIcon ? { width: '80%' } : { width: '100%' }]}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        secureTextEntry={secureTextEntry}></TextInput>
      <View style={styles.icon}>{icon}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
    marginTop: 15,
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
  }
});

InputPrimary.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isIcon: PropTypes.bool,
};

InputPrimary.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  icon: <></>,
  value: '',
  onChange: () => { },
  isIcon: false
};

export default InputPrimary;
