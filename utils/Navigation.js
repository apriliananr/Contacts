import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ShowAllContacts from './../container/ShowAllContacts/ShowAllContacts.container'
import ShowContactDetail from './../container/ShowContactDetail/ShowContactDetail.container'


const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ShowAllContacts' component={ShowAllContacts} />
        <Stack.Screen name='ShowContactDetail' component={ShowContactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator