import { StackNavigator } from 'react-navigation'
import DiscoverScreen from '../Containers/DiscoverScreen'
import LoginScreen from '../Containers/LoginScreen'
import SplashScreen from '../Containers/SplashScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  discover: { screen: DiscoverScreen },
  login: { screen: LoginScreen },
  splash: { screen: SplashScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'splash',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
