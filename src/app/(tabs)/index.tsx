import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {theme} from "@/theme"
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>BookBuddyMobile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
