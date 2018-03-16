import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  Text,
  Left,
  Right,
  Header,
  Button,
  Content,
  Container
} from 'native-base';

const ClassList = () => {
  return (
    <ScrollView
      style={styles.contentStyle}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Button Left rounded bordered style={styles.button}>
        <Text>CS 61B</Text>
      </Button>
      <Button Right rounded bordered style={styles.button}>
        <Text>CS 61A</Text>
      </Button>
      <Button rounded bordered style={styles.button}>
        <Text>HIST 101</Text>
      </Button>
      <Button rounded bordered style={styles.button}>
        <Text>ECN 101</Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    flexDirection: 'column'
  },
  contentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  button: {
    width: 150,
    margin: 10,
    justifyContent: 'center'
  }
});

export default ClassList;
