import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useHistory, useLocation, useParams} from 'react-router-native';

import {getCategoryName, getRecipeByRecipeId} from '../data/MockDataAPI';
import Carousel from '../components/Carousel';
import IconButton from '../components/IconButton';
import colors from '../constants/colors';

export default function RecipeScreen() {
  const history = useHistory();
  const {pathname} = useLocation();
  const {recipeId} = useParams();
  const recipe = getRecipeByRecipeId(recipeId);
  const [buttonTextColor, setButtonTextColor] = useState(colors.secondary);
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="rgba(255,255,255,0)" />
      <Carousel photos_urls={recipe.photosArray} />
      <View style={styles.iconButtonContainer}>
        <IconButton
          iconWidth={8}
          iconHeight={16}
          tintColor={colors.secondary}
          imgSrc={require('../assets/icons/backArrow.png')}
          onPress={() => history.goBack()}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        <Text style={styles.categoryName}>
          {getCategoryName(recipe.categoryId)}
        </Text>
        <View style={styles.timeContainer}>
          <Image
            source={require('../assets/icons/time.png')}
            style={styles.timeIcon}
          />
          <Text style={styles.timeTaken}>{recipe.time} minutes</Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor={colors.secondary}
          onPress={() => history.push(`${pathname}/ingredients`)}
          onShowUnderlay={() => setButtonTextColor(colors.white)}
          onHideUnderlay={() => setButtonTextColor(colors.secondary)}>
          <Text style={[styles.buttonText, {color: buttonTextColor}]}>
            View Ingredients
          </Text>
        </TouchableHighlight>
        <ScrollView>
          <Text style={styles.description}>{recipe.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.secondary,
    borderRadius: 32,
    borderWidth: 1,
    padding: 16,
    marginTop: 16,
    marginBottom: 32,
    width: '100%',
  },
  buttonText: {
    color: colors.secondary,
    textAlign: 'center',
  },
  categoryName: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 16,
    color: colors.secondary,
  },
  container: {flex: 1},
  description: {textAlign: 'justify'},
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  iconButtonContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight + 8,
    left: 13,
    backgroundColor: colors.white,
    borderRadius: 16,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    paddingEnd: 2,
  },
  recipeTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  timeIcon: {width: 20, height: 20},
  timeTaken: {
    paddingHorizontal: 4,
    fontWeight: 'bold',
  },
});
