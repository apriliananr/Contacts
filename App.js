// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ShowAllContacts from './container/ShowAllContacts/ShowAllContacts.container';
// import ShowContactDetail from './container/ShowContactDetail/ShowContactDetail.container';

// const AppNavigator = createStackNavigator({
//   ShowAllContacts: { screen: ShowAllContacts },
//   ShowContactDetail: { screen: ShowContactDetail},
//   // {
//   //       initialRouteName: "ShowAllContacts"
//   // }
// });

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }


import React from 'react'

import MainStackNavigator from './utils/Navigation'

export default function App() {
  return <MainStackNavigator />
}
