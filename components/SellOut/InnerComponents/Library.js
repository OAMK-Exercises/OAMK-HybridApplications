import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Library = () => {
    return (
        <View style={styles.container}>
            <Text> This is the library tab </Text>
        </View>
    )
}

export default Library

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
