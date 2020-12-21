import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, Animated } from 'react-native'
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

const forFade = ({ current }) => {
  // const fadeOpacity = new Animated.Value(current)
  // Animated.timing(fadeOpacity, {
  //   toValue: 1,
  //   duration: 250,
  //   useNativeDriver: true
  // })
  console.log(current.progress)
  return {
    cardStyle: {
      opacity: current.progress,
      // opacity: current.progress.interpolate({
      //   inputRange: [0, 0.5, 1.0],
      //   outputRange: [0.25, 0.5, 1.0],
      //   extrapolate: 'clamp',
      // }),
      // opacity: current.progress.timing({
      //   timing: 250,
      //   toValue: 1
      // })
    },
  }
}

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  };
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
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
            <Stack.Screen name="Slide" component={Slide} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
            <Stack.Screen name="WalletsScreen" component={Wallets} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
            <Stack.Screen name="StakingRewards" component={StakingRewards} options={{ headerShown: false, cardStyleInterpolator: forFade }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App;