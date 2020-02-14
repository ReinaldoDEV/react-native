import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const PeopleList = props => {
  const {peoples} = props;
  const textElements = peoples.map(people => {
    const {first} = people.name;
    return (
      <View key={first} style={styles.line}>
        <Text style={styles.lineText}>{first}</Text>
      </View>
    );
  });
  return <View style={styles.container}>{textElements}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbdbdb',
    width: 400,
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
  },
  lineText: {
    color: '#5e5e5e',
    fontSize: 20,
    paddingLeft: 20,
  },
});

export default PeopleList;
