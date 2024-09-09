import { Redirect, Tabs } from 'expo-router';
import {theme} from "@/theme"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import {Text} from "react-native"


const hasUserFinishedOnboarding = true

export default function Layout() {



  if(!hasUserFinishedOnboarding) {
    return <Redirect href="/onBoarding" />
  }

  return (

    <Tabs screenOptions={{tabBarActiveTintColor: theme.colorGreen}}>

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarLabel(props) {
          //   return <Text>Home</Text>
          // },
          tabBarShowLabel:false,
          tabBarIcon: ({size, color}) => <FontAwesome5 name="book-reader" size={size} color={color} />

      }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel:false,
          tabBarIcon: ({size, color}) => <Feather name="settings" size={size} color={color} />

      }} />
    </Tabs>
  );
}
