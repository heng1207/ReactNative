/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { AppStackNavigator } from './navigators/AppNavigators';

export default createAppContainer(AppStackNavigator);