import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => (
  <View style={styles.contrainer}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  contrainer: {
    marginTop: 0,
    backgroundColor: '#0c9296',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ffff',
  },
});

export default Header;
