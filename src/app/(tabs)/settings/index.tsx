import { Stack } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";

export default function SettingsScreen() {
  const [isArchived, setIsArchived] = useState(false);

  return (
    /* RULE: The ScrollView should be the TOP level element. 
      NativeTabs automatically handles the Top Safe Area for the first ScrollView.
    */
    <>
      <Stack.Screen
        options={{
          headerTitle: "", // Removes the text "index"
          headerLargeTitle: false, // Keeps the header small/compact
        }}
      />
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button icon="square.and.arrow.up" onPress={() => {}} />
        <Stack.Toolbar.Spacer />
        <Stack.Toolbar.Button icon="trash" onPress={() => {}} />
      </Stack.Toolbar>

      <Stack.Toolbar placement="left">
        <Stack.Toolbar.Menu icon="ellipsis.circle">
          <Stack.Toolbar.MenuAction
            icon="arrowshape.turn.up.left"
            onPress={() => Alert.alert("Reply")}
          >
            Reply
          </Stack.Toolbar.MenuAction>

          <Stack.Toolbar.MenuAction
            icon="arrowshape.turn.up.right"
            onPress={() => Alert.alert("Forward")}
          >
            Forward
          </Stack.Toolbar.MenuAction>

          <Stack.Toolbar.MenuAction
            icon={isArchived ? "tray.full" : "archivebox"}
            isOn={isArchived}
            onPress={() => setIsArchived(!isArchived)}
          >
            {isArchived ? "Unarchive" : "Archive"}
          </Stack.Toolbar.MenuAction>

          <Stack.Toolbar.MenuAction
            icon="trash"
            destructive
            onPress={() => Alert.alert("Delete")}
          >
            Delete
          </Stack.Toolbar.MenuAction>
        </Stack.Toolbar.Menu>
      </Stack.Toolbar>

      <ScrollView
        // Required for iOS minimizeBehavior to link correctly
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
      >
        {[...Array(26)].map((_, i) => (
          <Text className="py-4 border-b border-gray-200 h-20" key={i}>
            Setting Option {i + 1}
          </Text>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // Extra space to scroll past the tab bar
  },
  title: { marginBottom: 20, textAlign: "center" },
});
