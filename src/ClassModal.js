import React from 'react';
import { Modal, Text, View, Button } from 'react-native';
import { Form, Item, Input, Label, Header, Left, Icon } from 'native-base';

const ClassModal = props => {
  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        transparent={false}
        animationType="slide"
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}
      >
        <Header style={{ backgroundColor: '#FFF', alignSelf: 'flex-start' }}>
          <Button
            title="Back"
            onPress={() => {
              props.setModalVisible(false);
              props.resetHandler();
            }}
          />auto
        </Header>
        <Form>
          <Item floatingLabel>
            <Label>Class Name</Label>
            <Input
              maxLength={25}
              onChangeText={value => props.handleChange(value)}
            />
          </Item>
          {props.newClass ? (
            <Button
              title="Submit"
              onPress={() => {
                props.addNewClass(props.newClass);
                props.setModalVisible(false);
                props.resetHandler();
              }}
            />
          ) : (
            <Button
              title="Submit"
              onPress={() => {
                alert('Enter Class Name');
              }}
            />
          )}
        </Form>
      </Modal>
    </View>
  );
};

export default ClassModal;
