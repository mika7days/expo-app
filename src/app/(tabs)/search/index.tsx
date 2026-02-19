// src/app/(tabs)/search/index.tsx
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function SearchIndex() {
  return (
    <View style={{ flex: 1 }}>
      {/* 1. This tells the native Tab Bar to show the Search Input */}
      <Stack.Screen 
        options={{
          headerTitle: "Search",
          headerLargeTitle: true,
          // SDK 55 native search bar configuration
          headerSearchBarOptions: {
            placeholder: "Search Podcasts",
            autoFocus: true,
            hideWhenScrolling: false,
          }
        }} 
      />
      
      {/* OR use the specific SearchBar component from your doc: */}
      {/* <Stack.SearchBar placement="automatic" placeholder="Search" /> */}

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.content}>
          <Text style={styles.headerText}>Search Results</Text>
          {[...Array(30)].map((_, i) => (
            <View key={i} style={styles.item}>
               <Text>Podcast Episode {i + 1}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }
});