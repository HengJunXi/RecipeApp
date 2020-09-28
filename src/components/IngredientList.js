import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useHistory} from 'react-router-native';

import colors from '../constants/colors';
import FoodCard from './FoodCard';

export default function IngredientList({data}) {
  const history = useHistory();
  const renderItem = ({item: {ingredientId, name, photo_url, amount}}) => (
    <FoodCard
      title={name}
      subtitle={amount}
      imgUri={photo_url}
      imgWidth={100}
      imgHeight={100}
      titleStyle={styles.foodCardTitle}
      subtitleStyle={styles.foodCardSubtitle}
      onPress={() => history.push(`/ingredients/${ingredientId}`)}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.ingredientId.toString()}
      numColumns={3}
      columnWrapperStyle={styles.ingredientListColWrapper}
    />
  );
}

const styles = StyleSheet.create({
  ingredientListColWrapper: {
    justifyContent: 'space-evenly',
    paddingVertical: 8,
  },
  foodCardSubtitle: {color: colors.grey, textAlignVertical: 'top'},
  foodCardTitle: {fontSize: 14},
});
