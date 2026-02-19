import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";

export default function SettingsScreen() {
  return (
    /* RULE: The ScrollView should be the TOP level element. 
      NativeTabs automatically handles the Top Safe Area for the first ScrollView.
    */
    <ScrollView
      // Required for iOS minimizeBehavior to link correctly
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
    >
      <ThemedText type="subtitle" style={styles.title}>Settings</ThemedText>
      
      {[...Array(26)].map((_, i) => (
        <ThemedText key={i} type="default" style={styles.item}>
          Setting Option {i + 1}
        </ThemedText>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // Extra space to scroll past the tab bar
  },
  title: { marginBottom: 20, textAlign: 'center' },
  item: { paddingVertical: 15, borderBottomWidth: 0.5, borderBottomColor: '#ccc' }
});