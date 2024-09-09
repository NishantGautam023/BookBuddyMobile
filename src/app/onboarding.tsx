import {   StyleSheet} from "react-native";
import { theme } from "@/theme";
import {useUserStore} from '@/store/userStore';
import {useRouter} from "expo-router"
import BookBuddyButton from '@/components/BookBuddyButton';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar"


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
      <BookBuddyButton title="Let me In" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
