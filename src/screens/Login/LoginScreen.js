import { Link } from "@react-navigation/native";
import Google from "assets/icons/google-icon.svg";
import Logo from "assets/images/icon_horizontal.png";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "~components/atoms/Button";
import InputPrimary from "~components/atoms/InputPrimary";
import { userAction } from "~redux/slices/user.slice";
import { FONT_BOLD, FONT_REGULAR } from "~shared/config/fontFamily";
import { colors } from "~shared/styles/colors";
import { wrapperContainer } from "~shared/styles/common";

const myIcon = <Icon name="eye-off-outline" size={30} color={colors.white} />;

const LoginScreen = () => {

  const [params, setParams] = useState({
    username: '',
    password: ''
  })

  const handleLogin = () => { }

  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <InputPrimary
          placeholder="Enter your username"
          customStyle={{ marginTop: 20 }}
          value={params.username}
          onChange={(value) => {
            setParams((prev) => { return { ...prev, username: value } })
          }}
        />
        <InputPrimary
          placeholder="Enter your password"
          secureTextEntry={true}
          icon={myIcon}
          isIcon={true}
          customStyle={{ marginTop: 20 }}
          value={params.password}
          onChange={(value) => {
            setParams((prev) => { return { ...prev, password: value } })
          }}
        />

        <View style={{ marginTop: 35 }}>
          <Button value="Sign up" onClick={handleLogin} />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={[styles.text, FONT_BOLD]}>OR</Text>
        </View>

        <View>
          <Button
            value="Sign in with Google"
            icon={<Google />}
            direction="left"
            customStyle={{
              backgroundColor: colors.white,
              textColor: colors.lightDark,
            }}
          />
        </View>

        <View style={styles.wrapperCenter}>
          <Text style={styles.text}>
            Don’t have an acount? {""}
            <Link to={{ screen: "SignUp" }} style={{ ...FONT_BOLD }}>
              Create here
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    ...wrapperContainer,
    justifyContent: 'center'
  },
  container: {
    width: "100%",
    paddingHorizontal: 35,
    marginTop: 100,
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

export default LoginScreen;
