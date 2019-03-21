import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {NavigationActions} from "react-navigation"
import {Button, FormInput, FormLabel} from 'react-native-elements'
// Styles
import styles from './Styles/LoginScreenStyle'
import AuthActions from '../Redux/AuthRedux'

class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    // this.props.authUser('waqqas.jabbar@gmail.com', 'password')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn === true) {
      // we don't want user to go back to this screen
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'discover'})
        ]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  authUser() {
    if (this.state.email && this.state.password) {
      this.props.authUser(this.state.email, this.state.password)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => this.setState({email})}/>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(password) => this.setState({password})}/>
        <Button title="Login" disabled={this.props.loading} onPress={this.authUser.bind(this)}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.fetching,
    loggedIn: (state.auth.token !== null)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (email, password) => dispatch(AuthActions.authUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
