import Expo from 'expo';
import React, { Component } from 'react';
import {
  Form,
  Left,
  Body,
  Icon,
  Text,
  Title,
  Right,
  Button,
  Header,
  Picker,
  Content,
  Container,
  Item as FormItem
} from 'native-base';

import ClassList from './ClassList';
import AddButton from './AddButton';
import SemesterPicker from './SemesterPicker';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allClasses: ['CS 101', 'ECON 303', 'HIST 201'],
      newClass: '',
      isReady: false,
      selectedSem: 'key0',
      modalVisible: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ isReady: true }); //value set not to return anything before the font for native-base loads
  }

  onValueChange(value) {
    this.setState({ selectedSem: value });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleChange(event) {
    this.setState({ newClass: event });
  }

  resetHandler() {
    this.setState({ newClass: '' });
  }

  addNewClass(name) {
    classListArray = this.state.allClasses;
    classListArray.push(name);

    this.setState({ allClasses: classListArray });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header style={{ backgroundColor: '#EEE' }}>
          <Left>
            <Button transparent>
              <Icon style={{ color: '#000' }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#000' }}>Enrolled Classes</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <SemesterPicker
            selectedSemValue={this.state.selectedSem}
            onValueChange={this.onValueChange.bind(this)}
          />
          <ClassList allClasses={this.state.allClasses} />
          <AddButton
            newClass={this.state.newClass}
            allClasses={this.state.allClasses}
            modalVisible={this.state.modalVisible}
            addNewClass={this.addNewClass.bind(this)}
            handleChange={this.handleChange.bind(this)}
            resetHandler={this.resetHandler.bind(this)}
            setModalVisible={this.setModalVisible.bind(this)}
          />
        </Content>
      </Container>
    );
  }
}
