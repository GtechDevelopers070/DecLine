import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Text, Header, Button, Content, Container } from 'native-base';

import ClassModal from './ClassModal';

const AddButton = props => {
  return (
    <Button
      iconLeft
      success
      style={styles.button}
      onPress={() => {
        props.setModalVisible(true);
      }}
    >
      <Icon name="add" />
      <Text>Add Class</Text>
      <ClassModal
        newClass={props.newClass}
        allClasses={props.allClasses}
        addNewClass={props.addNewClass}
        modalVisible={props.modalVisible}
        handleChange={props.handleChange}
        setModalVisible={props.setModalVisible}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    alignSelf: 'center'
  }
});

export default AddButton;
