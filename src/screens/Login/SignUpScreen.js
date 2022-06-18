import { Image, StyleSheet, Text, View } from 'react-native'
import { Link } from '@react-navigation/native'
import Logo from 'assets/images/icon_horizontal.png'
import InputPrimary from '~components/atoms/InputPrimary'
import { colors } from '~shared/styles/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import Button from '~components/atoms/Button'
import { FONT_BOLD, FONT_REGULAR } from '~shared/config/fontFamily'

const myIcon = <Icon name="eye-off-outline" size={30} color={colors.white} />

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <InputPrimary placeholder="Enter your email" customStyle={{ marginTop: 20 }} />
      <InputPrimary
        placeholder="Enter password"
        secureTextEntry={true}
        icon={myIcon}
        isIcon={true}
        customStyle={{ marginTop: 20 }}
      />
      <InputPrimary
        placeholder="Enter password"
        secureTextEntry={true}
        icon={myIcon}
        isIcon={true}
        customStyle={{ marginTop: 20 }}
      />

      <View style={{ marginTop: 35 }}>
        <Button value="Sign up" />
      </View>

      <View style={styles.wrapperCenter}>
        <Text style={styles.text}>
          Already an acount?{' '}
          <Link to={{ screen: 'SignUpScreen' }} style={{ ...FONT_BOLD }}>
            Sign in
          </Link>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 35,
    marginTop: 40,
  },
  image: {
    width: '100%',
    marginBottom: 20,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
    textAlign: 'center',
    ...FONT_REGULAR,
  },
  wrapperCenter: {
    alignItems: 'center',
    marginTop: 35,
  },
})

export default SignUpScreen
