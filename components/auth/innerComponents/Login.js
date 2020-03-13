import React, { useState, useRef } from 'react'
import { StyleSheet,
         Text,
         TouchableOpacity, 
         View,
         ActivityIndicator, 
         TextInput} from 'react-native'

const Login = (props) => {
    const passwordRef = useRef();
    const errView = <View style={{marginTop: 10}} >
        <Text style={{fontSize: 15, color: 'red'}} >
            Username and Password not matches
        </Text>
    </View>
    return (
        <View style={styles.container}>
            <View style={styles.upperBody}>
                <Text style={{fontSize: 40 }} > SIGN IN </Text>
            </View>
            <View style={styles.lowerBody}>
                <View>
                    <View>
                        <Text style={styles.label} > Username </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType="next"
                                   enablesReturnKeyAutomatically={true}
                                   onSubmitEditing={() => passwordRef.current.focus()}
                                   onChangeText={value => props.setUsername(value) } />
                    </View>
                    <View style={{marginTop: 5}} >
                        <Text style={styles.label} > Password </Text>
                        <TextInput style={styles.inputField} 
                                   returnKeyType="done"
                                   enablesReturnKeyAutomatically={true}
                                   secureTextEntry={true}
                                   ref={passwordRef}
                                   onSubmitEditing={props.loginHandler}
                                   onChangeText={value => props.setPassword(value) } />
                    </View>
                    { props.error ? errView : null }
                    <TouchableOpacity   onPress={ props.isSpinner ? null : props.loginHandler } >
                        <View style={styles.loginButton} >
                            {
                                props.isSpinner ? <ActivityIndicator size='small' color='white' /> : <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}> SIGN IN </Text>
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 10}} >  
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{ fontSize: 13 }}> Do not have an account? - </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Register')} >
                            <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}} > register </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    upperBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    lowerBody: {
        flex: 2
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    inputField: {
        padding: 2,
        borderColor: 'blue',
        borderWidth: 0.5,
        borderRadius: 2,
        height: 45,
        marginTop: 7
    },
    loginButton: {
        borderColor: 'blue',
        borderRadius: 2,
        backgroundColor: 'blue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 50,
        width: 'auto',
    }
})
