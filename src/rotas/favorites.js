import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Favorites = () => (
  <View style={styles.container}>
            <Text style={styles.welcome}>
              Favoritos .
              <Icon name="heart" size={30} color="#FF0000" />
            </Text>
          </View>
)

export default Favorites

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})