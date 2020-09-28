import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useHistory} from 'react-router-native';

import {getCategoryById} from '../data/MockDataAPI';
import FoodCard from './FoodCard';

export default function FoodList({listHeaderComponent, data}) {
  const history = useHistory();
  const renderItem = ({item: {recipeId, title, categoryId, photo_url}}) => (
    <FoodCard
      title={title}
      imgWidth={150}
      imgHeight={150}
      subtitle={getCategoryById(categoryId).name}
      imgUri={photo_url}
      elevation={1}
      onPress={() => {
        history.push(`/recipes/${recipeId}`);
      }}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={listHeaderComponent}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.recipeId.toString()}
      numColumns={2}
      columnWrapperStyle={styles.foodListColWrapper}
    />
  );
}

const styles = StyleSheet.create({
  foodListColWrapper: {
    justifyContent: 'space-evenly',
    paddingVertical: 8,
  },
});
