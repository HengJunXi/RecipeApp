/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeRouter, Switch, Route, BackButton} from 'react-router-native';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';

import store from './store';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SearchScreen from './screens/SearchScreen';
import RecipeIngredientsScreen from './screens/RecipeIngredientsScreen';
import IngredientScreen from './screens/IngredientScreen';
import RecipeScreen from './screens/RecipeScreen';
import colors from './constants/colors';
import SideBar from './components/SideBar';

const App: () => React$Node = () => {
  const styles = {
    container: {flex: 1, backgroundColor: colors.white},
  };
  return (
    <Provider store={store}>
      <NativeRouter>
        <BackButton />
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Switch>
            <Route exact path="/categories" component={CategoriesScreen} />
            <Route path="/search/:query?" component={SearchScreen} />
            <Route exact path="/recipes/:recipeId" component={RecipeScreen} />
            <Route
              exact
              path="/recipes/:recipeId/ingredients"
              component={RecipeIngredientsScreen}
            />
            <Route
              exact
              path="/ingredients/:ingredientId"
              component={IngredientScreen}
            />
            <Route path="/" component={HomeScreen} />
          </Switch>
          <Route
            path="/:screen?/sidebar"
            children={({match}) => <SideBar isOpen={!!match} />}
          />
        </View>
      </NativeRouter>
    </Provider>
  );
};

export default App;
