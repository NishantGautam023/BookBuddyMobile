import {Image, Text, View, StyleSheet} from "react-native";
import { theme } from "@/theme";
import {useUserStore} from '@/store/userStore';
import {useRouter} from "expo-router"
import BookBuddyButton from '@/components/BookBuddyButton';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar"
import BookBuddyImage from '@/components/BookBuddyImage';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)


  const handlePress = () => {
    toggleHasOnboarded()
    router.replace("/")
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x:1, y: 1}}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
    >
      <StatusBar style="light" />
      <View>
          <Text style={styles.heading}>BookBuddy</Text>
          <Text style={styles.tagline}>
            Keep your mind healthy and happy
          </Text>
      </View>
      <BookBuddyImage />
      <BookBuddyButton title="Let me In" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    justifyContent: "space-evenly"
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center"
  },
  tagline: {
      fontSize: 24,
      color: theme.colorWhite,
      textAlign: "center"
  },
});
