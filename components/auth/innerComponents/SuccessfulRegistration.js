import React from 'react'
import { StyleSheet,
        TouchableOpacity,
         Text, 
         View } from 'react-native'

const SuccessfulRegistration = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                    <Text onPress={() => props.navigation.navigate('Login')}> Click here to sign in! </Text> 
                </TouchableOpacity>
                <Text> to your new account now! </Text>    
            </View>
        </View>
    )
}

export default SuccessfulRegistration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
