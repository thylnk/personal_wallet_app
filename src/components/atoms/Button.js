import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FONT_BOLD } from "~shared/config/fontFamily";
import { colors } from "~shared/styles/colors";

const Button = (props) => {
  const { value, onClick, icon, direction, customStyle } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        direction === "left" ? { flexDirection: "row-reverse" } : {},
        {
          backgroundColor: customStyle?.backgroundColor || colors.lightDark,
        },
      ]}
      onPress={onClick}
    >
      <Text
        style={[
          styles.text,
          { color: customStyle?.textColor || colors.white },
        ]}
      >
        {value}
      </Text>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
    textAlign: "center",
    ...FONT_BOLD,
  },
  icon: {
    paddingRight: 22,
  },
});

Button.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.node,
  direction: PropTypes.string,
  customStyle: PropTypes.object
};

Button.defaultProps = {
  value: "Button",
  icon: <></>,
  direction: "right",
  customStyle: {}
};

export default Button;
