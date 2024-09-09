import { View, StyleSheet}    from 'react-native';
import {theme} from "@/theme"
import {useUserStore} from '@/store/userStore';
import BookBuddyButton from '@/components/BookBuddyButton';

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);



  return (
    <View style={styles.container}>
      <BookBuddyButton title="Back to onboarding" onPress={toggleHasOnboarded}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite
  },
  text: {
    fontSize: 24,
  },
});
