import React from 'react'
import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    dificiltLevel: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount(){
        const heigthTotal = Dimensions.get('window').height
        const boardHeigth = heigthTotal + (1 - this.headerRatio)
        return Math.floor(boardHeigth / this.blockSize)
    }
}

export default params