import GlobalContextProvider from "../contexts";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Slot, Stack } from "expo-router";
import React, { useCallback } from "react";
import { StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// External libs imports
import * as SplashScreen from "expo-splash-screen";

// Fonts imports
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <View onLayout={onLayoutRootView} />
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <Stack
            initialRouteName="index"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="index"
              options={{
                title: "Home",
                headerShown: false,
              }}
            />
          </Stack>
        </ThemeProvider>
      </GlobalContextProvider>
    </GestureHandlerRootView>
  );
}
