import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Flag from  './Flag'

export default props =>{
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPerss}
                    style={styles.flagButton}>
                    <Flag bigger/>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>{props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={props.onNewGame}>
                    <Text style={styles.buttonLabel}>NEW GAME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 2,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flex:1,
        flexDirection: 'row'
    },
    flagButton:{
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },

    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
    }
})