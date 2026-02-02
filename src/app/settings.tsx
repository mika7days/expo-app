import { ThemedText } from "@/components/themed-text";
import { BottomTabInset } from "@/constants/theme";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ThemedText type="subtitle">Settings</ThemedText>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: BottomTabInset + 20,
          }}
          style={{ marginTop: 20, width: "100%", paddingHorizontal: 20 }}
        >
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45,
          ].map((item) => (
            <ThemedText key={item} type="small">
              Setting Option {item}
            </ThemedText>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
