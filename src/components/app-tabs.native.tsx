import { NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      iconColor={{
        default: colors.tabIconDefault,
        selected: colors.tabIconSelected,
      }}
      
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}

      badgeBackgroundColor={colors.tabIconSelected}
      labelStyle={{
        selected: { color: colors.tabIconSelected },
        default: { color: colors.textSecondary }
        }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Badge selectedBackgroundColor={"blue"}>3</NativeTabs.Trigger.Badge>
        {/* we cannot colour icons via styling, but upload 2 coloured icons for default and selected */}
        <NativeTabs.Trigger.Icon renderingMode="template" src={{
          default: require('@/assets/images/tabIcons/home.png'),
          selected: require('@/assets/images/tabIcons/home-selected.png'),
        }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('@/assets/images/tabIcons/explore.png')} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('@/assets/images/tabIcons/settings.png')} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
