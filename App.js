/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params'
import Field from './src/components/Filed'
import MineField from './src/components/MineField'
import { 
  createMinesdBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wowGame,
  showMines
        } from './src/functions'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state =this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.dificiltLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinesdBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wowGame(board)

    if (lost){
      showMines(board)
      Alert.alert('PERDEUUUUUU!!!!!!!', "Que burro")
    }
    if (won) {
      Alert.alert('Parabens!!!!', 'Voce Venceu!!!!')
    }

    this.setState({ board, lost, won})
  }
 
  render() {
    return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle} >Iniciando Mines !!! {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
		  <View style={styles.board}>
			  <MineField board={this.state.board}
          onOpenField={this.onOpenField}
        />
		  </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'flex-end'

  },
  board: {
	  alignItems: 'center',
	  backgroundColor: '#AAA'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});