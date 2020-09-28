import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  getRecipesByCategoryName,
  getRecipesByRecipeName,
} from '../data/MockDataAPI';
import NavBar from '../components/NavBar';
import FoodList from '../components/FoodList';
import IconButton from '../components/IconButton';
import SearchBar from '../components/SearchBar';
import BackIconButton from '../components/BackIconButton';
import {useParams} from 'react-router-native';

export default function SearchScreen() {
  const {query: queryFromPath} = useParams();
  console.log(queryFromPath);
  const [query, setQuery] = useState(queryFromPath ?? '');
  const recipeNameResult = getRecipesByRecipeName(query);
  const categoryNameResult = getRecipesByCategoryName(query);
  const resultSet = new Set();
  recipeNameResult.map((item) => resultSet.add(item));
  categoryNameResult.map((item) => resultSet.add(item));
  const result = Array.from(resultSet);

  return (
    <View style={styles.container}>
      <NavBar
        text="Search"
        startChild={<BackIconButton text="Home" />}
        centerChild={<SearchBar query={query} onQueryChange={setQuery} />}
        endChild={
          <IconButton
            imgSrc={require('../assets/icons/menu.png')}
            to="/search/sidebar"
          />
        }
      />
      <FoodList data={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
