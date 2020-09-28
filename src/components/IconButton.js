import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import colors from '../constants/colors';

export default function IconButton({
  text,
  iconWidth = 24,
  iconHeight = 24,
  tintColor = 'black',
  imgSrc,
  to,
  replace = false,
  onPress,
}) {
  const content = (
    <View style={[styles.container, !text && {width: 56}]}>
      <Image
        style={{width: iconWidth, height: iconHeight, tintColor: tintColor}}
        source={imgSrc}
      />
      {text && <Text style={[styles.text, {color: tintColor}]}>{text}</Text>}
    </View>
  );
  return to ? (
    <Link to={to} replace={replace} underlayColor={colors.lightgrey}>
      {content}
    </Link>
  ) : (
    <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  text: {paddingHorizontal: 8},
});
