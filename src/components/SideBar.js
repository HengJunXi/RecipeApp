import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import {useHistory} from 'react-router-native';

import IconButton from './IconButton';

export default function SideBar({isOpen}) {
  const history = useHistory();
  const sidebarWidth = 260;
  const sidebarPosX = useRef(new Animated.Value(isOpen ? 0 : -1 * sidebarWidth))
    .current;
  const backdropOpacity = useRef(new Animated.Value(isOpen ? 0.7 : 0)).current;

  useEffect(() => {
    Animated.timing(sidebarPosX, {
      toValue: isOpen ? 0 : -1 * sidebarWidth,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [sidebarPosX, isOpen, sidebarWidth]);

  useEffect(() => {
    Animated.timing(backdropOpacity, {
      toValue: isOpen ? 0.7 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [backdropOpacity, isOpen]);

  return (
    <>
      {isOpen && (
        <Animated.View style={[styles.backdrop, {opacity: backdropOpacity}]}>
          <Pressable
            style={styles.backdropPressable}
            onPress={() => history.goBack()}
          />
        </Animated.View>
      )}
      <Animated.View
        style={[styles.sidebar, {width: sidebarWidth, left: sidebarPosX}]}>
        <View style={styles.iconButtonContainer}>
          <IconButton
            text="HOME"
            imgSrc={require('../assets/icons/home.png')}
            to="/"
            replace={true}
          />
        </View>
        <View style={styles.iconButtonContainer}>
          <IconButton
            text="CATEGORIES"
            imgSrc={require('../assets/icons/category.png')}
            to="/categories"
            replace={true}
          />
        </View>
        <View style={styles.iconButtonContainer}>
          <IconButton
            text="SEARCH"
            imgSrc={require('../assets/icons/search.png')}
            to="/search"
            replace={true}
          />
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    elevation: 3,
    backgroundColor: 'black',
    width: '100%',
  },
  backdropPressable: {flex: 1},
  iconButtonContainer: {
    alignItems: 'flex-start',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    elevation: 3,
    justifyContent: 'center',
    padding: 32,
    flex: 1,
    backgroundColor: 'white',
  },
});
