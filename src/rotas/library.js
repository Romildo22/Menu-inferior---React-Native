import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Biblioteca = () => (
  <View style={styles.container}>
            <Text style={styles.welcome}>
              Biblioteca .
              <Icon name="book" size={30} color="#800000" />
            </Text>
          </View>
)

export default Biblioteca

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})