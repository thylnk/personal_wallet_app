import { Image, StyleSheet, View } from 'react-native'
import Logo from 'assets/images/icon_horizontal.png'
import InputPrimary from '~components/atoms/InputPrimary'
import { colors } from '~shared/config/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import Button from '~components/atoms/Button'

const myIcon = <Icon name="eye-off-outline" size={30} color={colors.white} />

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <InputPrimary placeholder="Enter your email" />
      <InputPrimary
        placeholder="Enter password"
        secureTextEntry={true}
        icon={myIcon}
        isIcon={true}
      />
      <InputPrimary
        placeholder="Enter password"
        secureTextEntry={true}
        icon={myIcon}
        isIcon={true}
      />
      <Button value='Sign up' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 35,
  },
  image: {
    width: '100%',
    marginBottom: 20,
  },
})

export default SignUpScreen
