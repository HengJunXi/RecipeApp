import React, {useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,
} from 'react-native';

import colors from '../constants/colors';

// Modified from https://reactnative.dev/docs/animations#tracking-gestures
export default function Carousel({photos_urls}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  const animatedScrollEvent = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    {useNativeDriver: false},
  );

  const images = photos_urls.map((image, imageIndex) => {
    return (
      <Image
        source={{uri: image}}
        style={[styles.image, {width: windowWidth}]}
        key={imageIndex}
      />
    );
  });

  const indicators = photos_urls.map((_image, imageIndex) => {
    const width = scrollX.interpolate({
      inputRange: [
        windowWidth * (imageIndex - 1),
        windowWidth * imageIndex,
        windowWidth * (imageIndex + 1),
      ],
      outputRange: [4, 8, 4],
      extrapolate: 'clamp',
    });
    const height = width;
    const opacity = scrollX.interpolate({
      inputRange: [
        windowWidth * (imageIndex - 1),
        windowWidth * imageIndex,
        windowWidth * (imageIndex + 1),
      ],
      outputRange: [0.4, 0.9, 0.4],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        key={imageIndex}
        style={[
          styles.normalDot,
          {
            width,
            height,
            opacity,
          },
        ]}
      />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={animatedScrollEvent}
        scrollEventThrottle={1}>
        {images}
      </ScrollView>
      <View style={styles.indicatorContainer}>{indicators}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 240,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 4,
    width: 4,
    borderRadius: 4,
    backgroundColor: colors.white,
    marginHorizontal: 8,
    opacity: 0.4,
  },
});
