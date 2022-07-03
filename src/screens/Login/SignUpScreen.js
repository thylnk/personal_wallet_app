import { Link } from "@react-navigation/native";
import Logo from "assets/images/icon_horizontal.png";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "~components/atoms/Button";
import InputPrimary from "~components/atoms/InputPrimary";
import api from "~shared/config/api";
import { FONT_BOLD, FONT_REGULAR } from "~shared/config/fontFamily";
import { colors } from "~shared/styles/colors";
import { wrapperContainer } from "~shared/styles/common";

const myIcon = <Icon name="eye-off-outline" size={30} color={colors.white} />;

const SignUpScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    avatar: "hehe",
    full_name: "",
    email: "",
    address: "DN",
    total_money: 0,
  });

  const onCreateUser = async () => {
    try {
      const res = await api.post('users/register/', JSON.stringify(user))
      if (res) {
        alert("Account has been successfully registered!");
        navigation.navigate('SignIn')
      }
    } catch (error) {
      if (error.data) {
        alert(error.data.message)
      }
    }
  }

  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <ScrollView>
          <InputPrimary
            placeholder="Enter full name"
            customStyle={{ marginTop: 20 }}
            onChange={(value) =>
              setUser((prev) => {
                return { ...prev, full_name: value };
              })
            }
            value={user.full_name}
          />
          <InputPrimary
            placeholder="Enter email"
            customStyle={{ marginTop: 20 }}
            onChange={(value) =>
              setUser((prev) => {
                return { ...prev, email: value };
              })
            }
            value={user.email}
          />
          <InputPrimary
            placeholder="Enter username"
            customStyle={{ marginTop: 20 }}
            onChange={(value) =>
              setUser((prev) => {
                return { ...prev, username: value };
              })
            }
            value={user.username}
          />
          {/* <InputPrimary placeholder="Enter email" customStyle={{ marginTop: 20 }} /> */}
          <InputPrimary
            placeholder="Enter password"
            secureTextEntry={true}
            icon={myIcon}
            isIcon={true}
            customStyle={{ marginTop: 20 }}
            value={user.password}
            onChange={(value) =>
              setUser((prev) => {
                return { ...prev, password: value };
              })
            }
          />

          {/* <InputPrimary
            placeholder="Enter password"
            secureTextEntry={true}
            icon={myIcon}
            isIcon={true}
            customStyle={{ marginTop: 20 }}
            value={password}
          /> */}

          <View style={{ marginTop: 35 }}>
            <Button value="Sign up" onClick={onCreateUser} />
          </View>
        </ScrollView>
        <View style={styles.wrapperCenter}>
          <Text style={styles.text}>
            Already an acount?{" "}
            <Link to={{ screen: "SignIn" }} style={{ ...FONT_BOLD }}>
              Sign in
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
    justifyContent: "center",
  },
  container: {
    width: "100%",
    paddingHorizontal: 35,
    marginTop: 70,
  },
  image: {
    width: "100%",
    marginBottom: 20,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
    textAlign: "center",
    ...FONT_REGULAR,
  },
  wrapperCenter: {
    alignItems: "center",
    marginTop: 35,
  },
});

export default SignUpScreen;
