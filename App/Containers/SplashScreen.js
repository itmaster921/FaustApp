import React, {Component} from "react";
import {Image, View} from "react-native";
import {Images} from "../Themes";
import {connect} from "react-redux";
import {NavigationActions} from 'react-navigation'
// Styles
import { Colors } from '../Themes'
import styles from "./Styles/SplashScreenStyles";

class SplashScreen extends Component {

  static navigationOptions = ({navigation}) => {
    return ({
      header: null
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success === true) {

      const routeName = this.props.loggedIn ? 'discover' : 'login'

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName})
        ]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  render() {
    return (
      <View style={[styles.mainContainer, {backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center'}]}>
        <Image source={Images.logo}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.startup.success,
    loggedIn: (state.auth.token !== null)
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
