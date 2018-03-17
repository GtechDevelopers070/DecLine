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

const ClassList = props => {
  return (
    <ScrollView
      style={styles.contentStyle}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {props.allClasses &&
        props.allClasses.map((oneClass, index) => (
          <Button key={index} Left rounded bordered style={styles.button}>
            <Text style={styles.text}>{oneClass}</Text>
          </Button>
        ))}
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
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
});

export default ClassList;
