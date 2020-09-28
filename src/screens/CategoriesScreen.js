import React from 'react';
import {StyleSheet, View} from 'react-native';

import NavBar from '../components/NavBar';
import CategoryList from '../components/CategoryList';
import BackIconButton from '../components/BackIconButton';

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <NavBar text="Categories" startChild={<BackIconButton text="Home" />} />
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
