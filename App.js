//importes padrão
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// importes para a navegação do menu inferior
import {createAppContainer} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// importes do conteudo que vai aparecer em cada aba
import Home from './src/rotas/home'
import Biblioteca from './src/rotas/library'
import Favorites from './src/rotas/favorites'
import Purchased from './src/rotas/purchased'
// par criar os icones na barra
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

//outra maneira de criar o conteudo de cada aba
/*const Library = () => (
  <View style={styles.container}>
    <Text style={{fontSize:30}}> Biblioteca </Text>
  </View>
)
const Favorites = () => (
  <View style={styles.container}>
    <Text style={{fontSize:30}}> Favoritos </Text>
  </View>
)
const Purchased = () => (
  <View style={styles.container}>
    <Text style={{fontSize:30}}> Purchased </Text>
  </View>
)*/

// para criar o vetor de imagem do icone
/*const tabBarIcon = name => ({ tintColor }) => (
    <MaterialIcons
      style={{ backgroundColor: 'transparent' }}
      name={name}
      color={tintColor}
      size={24}
      />
)*/

//configuração do menu, nome e icone que vai aparecer
const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={20} color={focused ? '#0000CD' : '#008B8B'} />
          // <Icon name="home" size={20} color={focused ? '#fff' : 'ddd'} />
          // a parte do parametro fff, é para quando está ativado
          // a parte do parametro ddd, é para quando está inativo
        ),
      }),
    },
    Biblioteca: {
      screen: Biblioteca,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="book" size={20} color={focused ? '#0000CD' : '#008B8B'} />
        ),
      }),
    },
    Favoritos: {
      screen: Favorites,navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="heart" size={20} color={focused ? '#0000CD' : '#008B8B'} />
        ),
      }),
    },
    Purchased: {
      screen: Purchased,navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="cog" size={20} color={focused ? '#0000CD' : '#008B8B'} />
        ),
      }),
    },
  },
  {
    shifting: false,
    activeColor: '#6200ee',
    inactiveColor: '#828792',
    //cor do fundo do menu ( barStyle)
    barStyle: {
      backgroundColor: '#f8f7f9',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },/*
        barStyle: {
        backgroundColor: '#7159c1',
      },*/
  }
)

export default createAppContainer(BottomTabMaterial);

//configuração da tela, no caso para deixar central
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})