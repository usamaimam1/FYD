import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack'
import store from './Redux/store';
import SplashScreen from './Src/Components/SplashScreen/SplashScreen';
const Stack = createStackNavigator()
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App;