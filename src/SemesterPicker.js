import React from 'react';
import { Form, Picker, Item as FormItem } from 'native-base';

const Item = Picker.Item;

const SemesterPicker = props => {
  return (
    <Form>
      <Picker
        placeholder="Select one"
        mode="dropdown"
        selectedValue={props.selectedSemValue}
        onValueChange={value => {
          props.onValueChange(value);
        }}
      >
        <Item label="Spring Semester" value="key0" />
        <Item label="Fall Semester" value="key1" />
      </Picker>
    </Form>
  );
};

export default SemesterPicker;
