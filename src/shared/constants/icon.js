import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~shared/styles/colors';

export const IconTrans = (type) => {
  switch (type) {
    case 1:
      return <Coffee />
      break;
    case 2:
      return <Purchase />
      break;
    case 3:
      return <Transport />
      break;
    case 4:
      return <Work />
      break;
    default:
      break;
  }
}

export const Coffee = ({ size = 24 }) => <Icon name="coffee" size={size} />
export const Purchase = ({ size = 24 }) => <Icon name='cart' size={size} />
export const Transport = ({ size = 24 }) => <Icon name='bus' size={size} />
export const Work = ({ size = 24 }) => <Icon name='shopping' size={size} />
export const Back = ({ size = 36 }) => <Icon name='chevron-left' size={size} />
export const Home = ({ focused, size = 24 }) => <Icon name='home' size={size} color={focused ? colors.white : colors.lightPurple} />
export const Transaction = ({ focused, size = 24 }) => <Icon name='hand-coin' size={size} color={focused ? colors.white : colors.lightPurple} />
export const MoneyBox = ({ focused, size = 24 }) => <Icon name='piggy-bank-outline' size={size} color={focused ? colors.white : colors.lightPurple} />
export const Setting = ({ focused, size = 24 }) => <Icon name='account-circle' size={size} color={focused ? colors.white : colors.lightPurple} />
