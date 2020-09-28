import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {
  getIngredientByIngredientId,
  getRecipesByIngredientId,
} from '../data/MockDataAPI';
import BackIconButton from '../components/BackIconButton';
import FoodList from '../components/FoodList';
import NavBar from '../components/NavBar';
import {useParams} from 'react-router-native';

export default function IngredientScreen() {
  const {ingredientId} = useParams();
  const ingredient = getIngredientByIngredientId(ingredientId);
  return (
    <View style={styles.container}>
      <NavBar
        text={ingredient.name}
        startChild={<BackIconButton text="Back" />}
      />

      <FoodList
        listHeaderComponent={
          <>
            <Image source={{uri: ingredient.photo_url}} style={styles.image} />
            <Text style={styles.headerText}>
              Recipes with {ingredient.name}:
            </Text>
          </>
        }
        data={getRecipesByIngredientId(ingredient.ingredientId)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  image: {
    height: 240,
  },
});
