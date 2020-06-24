import React, { Component } from "react";
import PropTypes from "prop-types";
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import styles from "./Card.component.style";

export default class Card extends Component {
	render(){
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
	        >
	          <View style={styles.wrapper}>
	            <Image style={styles.image} source={{uri: this.props.photo}} />
	            <View style={styles.card}>
	              <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
	              <Text style={styles.age}>{this.props.age} years old </Text> 
	            </View>
	          </View>
	      </TouchableOpacity>
		)
	}
}

Card.propTypes = {
    onPress: PropTypes.func,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.string,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
