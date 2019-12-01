import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text>Main page component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
