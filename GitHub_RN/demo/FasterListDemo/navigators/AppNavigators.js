import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'

import HomePage from '../pages/HomePage'
import SwipeableFlatListDemo from '../pages/SwipeableFlatListDemo'
import FlatListDemo from '../pages/FlatListDemo'
import SectionListDemo from '../pages/SectionListDemo'
import ReactNativeLayoutDemo from '../pages/ReactNativeLayoutDemo';

export const AppStackNavigator = createStackNavigator(
    {
        HomePage: {
            screen: HomePage,
        },
        SwipeableFlatListDemo: {
            screen: SwipeableFlatListDemo,
        },
        FlatListDemo: {
            screen: FlatListDemo,
        },
        SectionListDemo: {
            screen: SectionListDemo,
        },
        ReactNativeLayoutDemo: {
            screen: ReactNativeLayoutDemo,
        }
    }
);
