import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '~shared/config/colors';
import { FONT_BOLD } from '~shared/config/fontFamily';

const Button = (props) => {
  const { value, onChange, icon, isIcon } = props;

  return (
    // <View>
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.lightDark,
    marginTop: 35,
    borderRadius: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
    color: colors.white,
    textAlign: 'center',
    ...FONT_BOLD,
  },
  icon: {
    paddingRight: 22,
  }
});

Button.propTypes = {
  value: PropTypes.string.isRequired
};

Button.defaultProps = {
  value: 'Button'
};

export default Button;
