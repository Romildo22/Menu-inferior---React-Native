import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = () => (
  <View style={styles.container}>
            <Text style={styles.welcome}>
              Inicio .
              <Icon name="home" size={30} color="#3CB371" />
            </Text>
          </View>
)

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})