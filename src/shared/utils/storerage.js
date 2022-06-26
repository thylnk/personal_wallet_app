import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAccessToken = async (value) => {
  try {
    await AsyncStorage.setItem('access', value)
  } catch (e) {
    console.log("setAccess Error: ", e)
  }
}

export const getAccessToken = async () => {
  let value = ''
  try {
    value = await AsyncStorage.getItem('access')
    // jsonValue = JSON.parse(value)
  } catch (e) {
    console.log("No access is saved in asyncStorage")
    return ''
  } finally {
    return value !== null ? value : '';
  }
}