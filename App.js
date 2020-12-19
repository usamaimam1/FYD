import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import store from './Redux/store';
import SplashScreen from './Src/Components/SplashScreen/SplashScreen';
import Slide from './Src/Components/Slide/Slide';
import MainScreen from './Src/Components/MainScreen/MainScreen'
import Wallets from './Src/Components/Wallets/Wallets';
import StakingRewards from './Src/Components/StakingRewards/StakingRewards';
const Stack = createStackNavigator()

const config = {
  animation: 'timing',
  config: {
    duration: 250,
    // stiffness: 1000,
    // damping: 500,
    // mass: 3,
    // overshootClamping: true,
    // restDisplacementThreshold: 0.01,
    // restSpeedThreshold: 0.01,
  },
};
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
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }} />
            <Stack.Screen name="Slide" component={Slide} options={{ headerShown: false }} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
            <Stack.Screen name="WalletsScreen" component={Wallets} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
            <Stack.Screen name="StakingRewards" component={StakingRewards} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App;