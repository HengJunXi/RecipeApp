import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useParams} from 'react-router-native';

import BackIconButton from '../components/BackIconButton';
import IngredientList from '../components/IngredientList';
import NavBar from '../components/NavBar';
import {getRecipeByRecipeId, getRecipeIngredients} from '../data/MockDataAPI';

export default function RecipeIngredientsScreen() {
  const {recipeId} = useParams();
  const recipe = getRecipeByRecipeId(recipeId);
  const ingredients = getRecipeIngredients(recipe.ingredients).map(
    (ingredient) => ({
      ...ingredient[0],
      amount: ingredient[1],
    }),
  );
  return (
    <View style={styles.container}>
      <NavBar
        text={`Ingredients for ${recipe.title}`}
        startChild={<BackIconButton text="Back" />}
      />
      <IngredientList data={ingredients} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
