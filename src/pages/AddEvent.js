import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ExecAddEvent from '../utils/request';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      address: null,
      start_date: null,
      end_date: null,
      start_time: null,
      end_time: null,
      snackVisible: false,
      snackText: null,
      isStartDateTimePickerVisible: false,
      isEndDateTimePickerVisible: false
    };
  };

  _showStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: true });
 
  _hideStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: false });
 
  _handleStartDatePicked = (date) => {
    console.log(date);
    date = new Date(date);
    this.setState({ start_date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` });
    this.setState({ start_time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` });
    console.log('A date has been picked: ', this.state.start_date, this.state.start_time);
    this._hideStartDateTimePicker();
  };

  _showEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: true });
 
  _hideEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: false });
 
  _handleEndDatePicked = (date) => {
    console.log(date);
    date = new Date(date);
    this.setState({ end_date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` });
    this.setState({ end_time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` });
    console.log('A date has been picked: ', this.state.end_date, this.state.end_time);
  };

  hasEmptyValue = object => {
    for (let property in object) {
      if (!object[property])
        return true;
    }
    return false;
  }

  hideModal = () => this.setState({ snackVisible: false });

  handleAddEventClick = () => {
    const eventDetails = {
      title: this.state.title,
      description: this.state.description,
      address: this.state.address,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      organizer_id: Number(this.props.id)
    };
    if (this.hasEmptyValue(eventDetails)) {
      this.setState({
        snackText: 'Please fill all the fields',
        snackVisible: true
      })
    } else {
      ExecAddEvent('add_event.php', eventDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View>
          <Snackbar
            visible={this.state.snackVisible}
            onDismiss={() => this.setState({ snackVisible: false })}
            duration={1000}
          >
            {this.state.snackText}
          </Snackbar>
          <TextInput
            mode='outlined'
            label='Title'
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
          <TextInput
            mode='outlined'
            label='Description'
            value={this.state.description}
            onChangeText={description => this.setState({ description })}
          />
          <TextInput
            mode='outlined'
            label='Address'
            multiline={true}
            numberOfLines={3}
            value={this.state.address}
            onChangeText={address => this.setState({ address })}
          />
          <Button mode="outlined" onPress={() => this.setState({ isStartDateTimePickerVisible: true })}>
            Select Start Date - Time
          </Button>
          <Button mode="outlined" onPress={() => this.setState({ isEndDateTimePickerVisible: true })}>
            Select End Date - Time
          </Button>
          <DateTimePicker
            mode='datetime'
            isVisible={this.state.isStartDateTimePickerVisible}
            onConfirm={this._handleStartDatePicked}
            onCancel={this._hideStartDateTimePicker}
          />
          <DateTimePicker
            mode='datetime'
            isVisible={this.state.isEndDateTimePickerVisible}
            onConfirm={this._handleEndDatePicked}
            onCancel={this._hideEndDateTimePicker}
          />
          <Button mode="contained" onPress={this.handleAddEventClick}>
            Add Event
          </Button>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({

});