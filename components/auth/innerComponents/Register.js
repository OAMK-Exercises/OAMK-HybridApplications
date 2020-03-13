import React, {useRef, useState } from 'react'
import { StyleSheet, 
         Text, 
         View, 
         TextInput,
         TouchableOpacity } from 'react-native'

const Register = (props) => {

    const passwordRef = useRef();
    const emailRef = useRef();

    const errorView = <View style={{marginTop: 10}}>
        <Text style={{fontSize: 15, color: 'red'}} >
            The username, email and/or the password are incorrect!
        </Text>
    </View>

    // const onRegistrationSuccess = () => {
        if ( props.registrationSuccess) {
            props.navigation.navigate('SuccessfulRegistration');
        }
    // }

    return (
        <View style={styles.container}>
            <View style={styles.upperBody}>
                <Text style={{fontSize: 30, marginTop: 50 }} > Register </Text>
            </View>
            <View style={styles.lowerBody}>
                <View>
                    <View>
                        <Text style={styles.label} > Username </Text>
                        <TextInput style={styles.inputField} 
                                   returnKeyType='next'
                                   enablesReturnKeyAutomatically={true}
                                   onSubmitEditing={() => passwordRef.current.focus()}
                                   onChangeText={value => props.setUsername(value) } />
                    </View>
                    <View style={{marginTop: 5}} >
                        <Text style={styles.label} > Password </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType='next'
                                   enablesReturnKeyAutomatically={true}
                                   onSubmitEditing={() => emailRef.current.focus()}
                                   secureTextEntry={true}
                                   ref={passwordRef}
                                   onChangeText={value => props.setPassword(value) } />
                    </View>
                    <View>
                        <Text style={styles.label} > Name </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType="next"
                                   enablesReturnKeyAutomatically={true}
                                   onSubmitEditing={() => passwordRef.current.focus()} />
                    </View>
                    <View>
                        <Text style={styles.label} > City </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType="next"
                                   enablesReturnKeyAutomatically={true}
                                   onSubmitEditing={() => passwordRef.current.focus()} />
                    </View>
                    <View>
                        <Text style={styles.label} > Country </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType="next"
                                   enablesReturnKeyAutomatically={true}
                                   onSubmitEditing={() => passwordRef.current.focus()} />
                    </View>
                    <View style={{marginTop: 5}}>
                        <Text style={styles.label} > Email </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType="done"
                                   keyboardType='email-address'
                                   enablesReturnKeyAutomatically={true}
                                   onSubmitEditing={props.registerHandler}
                                   ref={emailRef}
                                   onChangeText={value => props.setEmail(value) } />
                    </View>
                    { props.error ? errorView : null }
                    <TouchableOpacity onPress={props.registerHandler} >
                        <View style={styles.registerButton} >
                            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}> SIGN UP </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 15}} >
                    <View style={{flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: 'black' }}> You have an account already? - </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')} >
                            <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}} > login </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        // <View style={styles.container}>
            
        // </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    upperBody: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    lowerBody: {
        flex: 6
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
    registerButton: {
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
