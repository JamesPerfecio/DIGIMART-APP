import { Text, View } from 'react-native'
import React from 'react'
import {Stack,SplashScreen } from 'expo-router'
import {useFonts} from 'expo-font'
import {useEffect} from 'react'

SplashScreen.preventAutoHideAsync();

const MainLayout= () => {

  const [fontsLoaded, error] = useFonts({
    "FiraSansCondensed-Black": require("../assets/fonts/FiraSansCondensed-Black.ttf"),
    "FiraSansCondensed-Bold": require("../assets/fonts/FiraSansCondensed-Bold.ttf"),
    "FiraSansCondensed-ExtraBold": require("../assets/fonts/FiraSansCondensed-ExtraBold.ttf"),
    "FiraSansCondensed-ExtraLight": require("../assets/fonts/FiraSansCondensed-ExtraLight.ttf"),
    "FiraSansCondensed-Light": require("../assets/fonts/FiraSansCondensed-Light.ttf"),
    "FiraSansCondensed-Medium": require("../assets/fonts/FiraSansCondensed-Medium.ttf"),
    "FiraSansCondensed-Regular": require("../assets/fonts/FiraSansCondensed-Regular.ttf"),
    "FiraSansCondensed-SemiBold": require("../assets/fonts/FiraSansCondensed-SemiBold.ttf"),
    "FiraSansCondensed-Thin": require("../assets/fonts/FiraSansCondensed-Thin.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <Stack>
            <Stack.Screen 
            name="index"
            options={{
                headerShown:false
            }}
            />
    </Stack>

    // <>
    // header
    // <Slot></Slot>
    // footer
    // </>
  )
}

export default MainLayout
