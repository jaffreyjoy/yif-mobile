import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, View } from 'native-base';
import ExecGetEvents from '../utils/request';

export default class UpcomingEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventComponents: []
    }
  }

  async generateEventList() {
    return ExecGetEvents('show_upcoming_events.php')
      .then((res) => {
        console.log(res);
        return res.data.map(function (event, index) {
          return (
            <ListItem thumbnail key={index}>
              <Left>
                <Thumbnail square source={require("../../assets/images/user-avatar.jpg")} />
              </Left>
              <Body>
                <Text>{event.title}</Text>
                <Text>{event.start_date}</Text>
                <Text>{event.start_time}</Text>
                <Text note numberOfLines={1}>{event.description}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          )
        });
      })
      .catch((err) => console.log(err));
  }

  async componentWillMount() {
    this.setState({ eventComponents: await this.generateEventList() })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {this.state.eventComponents}
          </List>
        </Content>
      </Container>
    );
  }
}