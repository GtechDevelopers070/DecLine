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

  handleChange(e){
    this.setState({ newClass: e.target.value })
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
          <ClassList />
          <AddButton
            modalVisible={this.state.modalVisible}
            onValueChange={this.onValueChange.bind(this)}
            setModalVisible={this.setModalVisible.bind(this)}
          />
        </Content>
      </Container>
    );
  }
}
