import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./app/components/NativeBaseIcon";
import { Platform, SafeAreaView } from "react-native";

import * as Styles from './app/resources/styles/Styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import HomePage from './app/views/Homepage';
import DetailPage from './app/views/DetailPage';
import TestPage from './app/views/TestPage';

import MenuGroup from "./app/components/MenuGroup";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <Box
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}>
      
        {/* <SafeAreaView style={ Styles.page }> */}

          <MenuGroup style={Styles.page}/>
        {/* </SafeAreaView> */}
          <Stack.Navigator initialRouteName="HomePage" screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomePage">
              {(props) => <HomePage {...props} />}
            </Stack.Screen>
            <Stack.Screen name="DetailPage">
              {(props) => <DetailPage {...props} />}
            </Stack.Screen>
            <Stack.Screen name="TestPage">
              {(props) => <TestPage {...props} />}
            </Stack.Screen>
          </Stack.Navigator>

          </Box>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


