import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import styles from "./ShowContactDetail.container.style";

export default class ShowContactDetail extends Component {

render(){
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>Contact Detail</Text>
    </View>
    <View style={styles.divider}></View>
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <TouchableOpacity
        // onPress={props.onPress}
        >
          <View style={styles.wrapper}>
            <Image style={styles.image} source={{uri: item.photo}} />
            <View style={styles.card}>
              <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
              <Text style={styles.age}>{item.age} years old </Text> 
            </View>
          </View>
      </TouchableOpacity>
      }

      />
    </SafeAreaView>
  );
}
}
