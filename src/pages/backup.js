import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, View } from 'native-base';
import ExecGetEvents from '../utils/request';

export default class UpcomingEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventComponents: [
        <View>
          <Text>Title</Text>
        </View>
      ]
    }
  }

  async generateEventList() {
    return ExecGetEvents('show_upcoming_events.php')
      .then((res) => {
        console.log("///////////////////// RES /////////////////////////")
        console.log(res);
        console.log("///////////////////// RES END /////////////////////////")
        console.log("///////////////////// RES[0] CONTENTS /////////////////////////")
        console.log(res.data[0]);
        console.log("///////////////////// RES[0] CONTENTS END /////////////////////////")
        return res.data.map(function(event, index) {
          return (
            <View key={index}>
              <Text>{event.title}</Text>
              <Text>{event.start_date}</Text>
              <Text>{event.start_time}</Text>
              <Text note numberOfLines={1}>{event.description}</Text>
            </View>
          )
        });
      })
      .catch((err) => console.log(err));
  }

  async componentDidMount() {
    console.log("///////////////////// GENERATE /////////////////////////")
    console.log(await this.generateEventList())
    this.setState({ eventComponents: await this.generateEventList() })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
        {this.state.eventComponents}
          {/* 
          <List>
            <ListItem></ListItem>
          </List> */}
        </Content>
      </Container>
    );
  }
}