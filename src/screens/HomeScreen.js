import React from 'react';
import {StyleSheet, View} from 'react-native';

import NavBar from '../components/NavBar';
import FoodList from '../components/FoodList';
import IconButton from '../components/IconButton';
import {getAllRecipes} from '../data/MockDataAPI';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NavBar
        text="Home"
        startChild={
          <IconButton
            imgSrc={require('../assets/icons/menu.png')}
            to={'/sidebar'}
          />
        }
      />
      <FoodList data={getAllRecipes()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
