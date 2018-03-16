import React from 'react';
import { Form, Item, Input, Label } from 'native-base';
import { Modal, Text, TouchableHighlight, View, Button } from 'react-native';

const ClassModal = props => {
  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed');
        }}
      >
        <Form>
          <Item floatingLabel>
            <Label>Class Name</Label>
            <Input onChange={e => props.onValueChange(e)} />
          </Item>
          <Button
            title="Submit"
            style={{ backgroundColor: 'green' }}
            onPress={() => {
              props.setModalVisible(false);
            }}
          />
        </Form>
      </Modal>
    </View>
  );
};

export default ClassModal;
