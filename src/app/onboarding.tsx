import {  View, StyleSheet,  } from "react-native";
import { theme } from "@/theme";
import {useUserStore} from '@/store/userStore';
import {useRouter} from "expo-router"
import BookBuddyButton from '@/components/BookBuddyButton';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)


  const handlePress = () => {
    toggleHasOnboarded()
    router.replace("/")
  };

  return (
    <View style={styles.container}>
    <BookBuddyButton title="Let me In" onPress={handlePress} />
    </View>
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
