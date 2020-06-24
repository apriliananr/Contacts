import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import styles from "./ShowAllContacts.container.style";
import Card from "./../../component/Card/Card.component";
import Url from "./../../utils/Url";
import Api from "./../../utils/Api";

export default class ShowAllContacts extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isLoading: true,
      contactData: []
    }
  }

  componentDidMount(){
    this._fetchContactData();
  }

  _fetchContactData = () => {
    const getContact = Url.URL.CONTACT_URL;

    Api.get(getContact)
    .then((response) => {
      const responseData = response && response.data && response.data ? response.data.data : null;
      responseData && this.setState({
        isLoading: false,
        contactData: responseData
      })
    })
    .catch((error) => {
      let errorMessage = (((error || {}).response || {}).data || {}).errorMessage;
      this.setState({
        isLoading: false
      })
      console.log(error);
    })
  }

render(){
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>All Contacts</Text>
    </View>
    <View style={styles.divider}></View>
      <FlatList
        data={this.state.contactData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <Card 
          onPress={() => console.log("TEST")}
          firstName={item.firstName}
          lastName={item.lastName}
          photo={item.photo}
          age={item.age}
        />
      }

      />
    </SafeAreaView>
  );
}
}
