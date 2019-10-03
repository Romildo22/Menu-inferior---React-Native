import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const purchased = () => (
  <View style={styles.container}>
            <Text style={styles.welcome}>
              Teste de icone , deu tudo certo mané .
              <Icon name="rocket" size={30} color="#900" />
            </Text>
          </View>
)

export default purchased

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})