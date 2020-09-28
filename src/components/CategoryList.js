import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useHistory} from 'react-router-native';

import {getAllCategories, getNumberOfRecipes} from '../data/MockDataAPI';
import FoodCard from './FoodCard';

export default function CategoryList() {
  const history = useHistory();
  const renderItem = ({item: {id, name, photo_url}}) => {
    const numberOfRecipes = getNumberOfRecipes(id);
    const subtitle =
      numberOfRecipes > 1
        ? `${numberOfRecipes} recipes`
        : `${numberOfRecipes} recipe`;
    return (
      <View style={styles.foodCardContainer}>
        <FoodCard
          title={name}
          subtitle={subtitle}
          imgUri={photo_url}
          imgHeight={150}
          elevation={1}
          titleStyle={styles.foodCardTitle}
          onPress={() => history.push(`/search/${name}`)}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={getAllCategories()}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  foodCardContainer: {padding: 8},
  foodCardTitle: {fontSize: 18},
});
