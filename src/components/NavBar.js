import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function NavBar({text, startChild, endChild, centerChild}) {
  return (
    <View style={styles.container}>
      <View style={styles.startChild}>{startChild}</View>
      {centerChild ? (
        <View>{centerChild}</View>
      ) : (
        <Text style={styles.title} numberOfLines={1}>
          {text}
        </Text>
      )}
      <View style={styles.endChild}>{endChild}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  endChild: {
    position: 'absolute',
    top: 0,
    end: 0,
  },
  startChild: {
    position: 'absolute',
    top: 0,
    start: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 80,
  },
});
