import React from 'react';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';

import colors from '../constants/colors';

export default function SearchBar({query, onQueryChange}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/icons/search.png')}
          style={styles.icon}
        />
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for recipe"
        value={query}
        onChangeText={onQueryChange}
      />
      <Pressable style={styles.iconContainer} onPress={() => onQueryChange('')}>
        {query ? (
          <Image
            source={require('../assets/icons/clear.png')}
            style={styles.icon}
          />
        ) : (
          <View style={styles.icon} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  iconContainer: {
    padding: 8,
  },
  searchBar: {
    paddingVertical: 4,
    fontSize: 16,
    maxWidth: 150,
  },
});
