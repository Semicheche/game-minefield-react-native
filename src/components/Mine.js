import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.core}></View>
            <View style={styles.line}></View>
            <View style={[styles.line, {transform: [{rotate: '45deg'}]}]}></View>
            <View style={[styles.line, {transform: [{rotate: '90deg'}]}]}></View>
            <View style={[styles.line, {transform: [{rotate: '135deg'}]}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    core:{
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: '#000'
    }
})