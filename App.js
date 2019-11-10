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
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params'
import Field from './src/components/Filed'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import { 
  createMinesdBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wowGame,
  showMines,
  invertFlag,
  flagUsed
        } from './src/functions'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state =this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount() -1
    const rows = params.getRowsAmount() -1

    return {
      board: createMinesdBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
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

  onSelectField = (row, column) =>{
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wowGame(board)

    if (won) {
      Alert.alert('Parabens!!!!', 'Voce Venceu!!!!')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }
 
  render() {
    return (
        <View style={styles.container}>
          <LevelSelection isVisible={this.state.showLevelSelection}
            onLevelSelected={this.onLevelSelected}
            onCancel={() => this.setState({ showLevelSelection: false })}></LevelSelection>
          <Header flagsLeft={this.minesAmount() - flagUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true })}/>
          <View style={styles.board}>
            <MineField board={this.state.board}
              onOpenField={this.onOpenField}
              onSelectField={this.onSelectField}
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
    backgroundColor: '#AAA',
  }
});