import React from 'react';
import { Modal, Text, View, Button } from 'react-native';
import { Form, Item, Input, Label, Header, Left, Icon } from 'native-base';

const ClassModal = props => {
  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onDismiss={() => {
          props.setModalVisible(false);
        }}
        onRequestClose={() => {
          alert('Modal has been closed');
        }}
      >
        <Header style={{ backgroundColor: '#FFF' }}>
          <Left>
            <Button
              title="Back"
              style={{ color: '#000' }}
              onPress={() => {
                props.setModalVisible(false);
                props.resetHandler();
              }}
            />
          </Left>
        </Header>
        <Form>
          <Item floatingLabel>
            <Label>Class Name</Label>
            <Input maxLength={25} onChangeText={value => props.handleChange(value)} />
          </Item>
          {props.newClass ? (
            <Button
              title="Submit"
              onPress={() => {
                props.setModalVisible(false);
                props.addNewClass(props.newClass);
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
