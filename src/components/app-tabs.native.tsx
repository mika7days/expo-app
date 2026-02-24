import { Colors } from "@/constants/theme";
import { useSegments } from "expo-router"; // Add this
import { NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";
import { Text, useColorScheme, View } from "react-native";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  // 1. Get the current route segments
  const segments = useSegments() as string[]; // Typecast to string[] for easier handling

  // 2. Check if the "search" folder is active
  // Since your path is (tabs)/search/index, segments will include "search"
  const isSearchPage = segments.includes("search");

  return (
    <NativeTabs
      minimizeBehavior="onScrollDown"
      iconColor={{
        default: colors.tabIconDefault,
        selected: colors.tabIconSelected,
      }}
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      badgeBackgroundColor={colors.tabIconSelected}
      labelStyle={{
        selected: { color: colors.tabIconSelected },
        default: { color: colors.textSecondary },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Badge selectedBackgroundColor={"blue"}>
          3
        </NativeTabs.Trigger.Badge>
        {/* we cannot colour icons via styling, but upload 2 coloured icons for default and selected */}
        <NativeTabs.Trigger.Icon
          renderingMode="template"
          src={{
            default: require("@/assets/images/tabIcons/home.png"),
            selected: require("@/assets/images/tabIcons/home-selected.png"),
          }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require("@/assets/images/tabIcons/explore.png")}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require("@/assets/images/tabIcons/settings.png")}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search" role="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require("@/assets/images/tabIcons/search.png")}
        />
      </NativeTabs.Trigger>

      {!isSearchPage && (
        <NativeTabs.BottomAccessory>
          <View className="h-full flex justify-center items-center">
            <Text className="text-center text-xl">Bottom Accessory Bar</Text>
          </View>
        </NativeTabs.BottomAccessory>
      )}
    </NativeTabs>
  );
}
