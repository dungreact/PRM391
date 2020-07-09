import React from 'react';
import Auth from './src/screen/Auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Secured from './src/screen/Secured';
import Home from './src/screen/ScreenHome';
// @TODO: This is to hide a Warning
//  caused by NativeBase after upgrading to RN 0.62
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. ' +
  'This is a required option and must be explicitly set to `true` or `false`',
]);
// ------- END OF WARNING SUPPRESSION

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Home/>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Home" component={Auth}/>
    //     <Stack.Screen name="Secured" component={Secured}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
