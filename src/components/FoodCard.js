import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function FoodCard({
  title,
  subtitle,
  imgUri,
  imgWidth,
  imgHeight,
  elevation,
  titleStyle,
  subtitleStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        imgWidth && {width: imgWidth},
        elevation && {elevation: elevation},
      ]}
      onPress={onPress}>
      <Image
        source={{uri: imgUri}}
        style={[
          styles.image,
          imgWidth && {width: imgWidth},
          imgHeight && {height: imgHeight},
        ]}
      />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
  },
  image: {
    borderRadius: 16,
  },
  subtitle: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    padding: 4,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    fontSize: 16,
  },
});
