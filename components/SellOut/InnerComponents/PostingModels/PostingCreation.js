import React from 'react'
import { StyleSheet,
        TouchableOpacity,
         Text, 
         View,
         TextInput,
         Picker } from 'react-native'


const PostingCreation = (props) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.upperBody}>
                <Text style={{fontSize: 30, marginTop: 50 }} > Create a new item to sell! </Text>
            </View>
            <View style={styles.lowerBody}>
                <View>
                    <View>
                        <Text style={styles.label}> Title </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType='next'
                                   enablesReturnKeyAutomatically={true} />
                    </View>
                    <View>
                        <Text style={styles.label}> Description </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType='next'
                                   enablesReturnKeyAutomatically={true} />
                    </View>
                    <View>
                        <Text style={styles.label}> Description </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType='next'
                                   enablesReturnKeyAutomatically={true} />
                    </View>
                    <View>
                        <Text style={styles.label}> Category </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType='next'
                                   enablesReturnKeyAutomatically={true} />
                    </View>
                    <View>
                        <Text style={styles.label}> DeliveryType </Text>
                        <Picker
                            style={{width: 250}}
                            >
                            <Picker.Item label="Shipping" value="Shipping" />
                            <Picker.Item label="Pick Up" value="Pick up" />
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.label}> Asking price </Text>
                        <TextInput style={styles.inputField}
                                   returnKeyType='next'
                                   enablesReturnKeyAutomatically={true}
                                   keyboardType='number-pad'
                                   /* 
                                   onChangeText={(text)=> {
                                    
                                    let newText = '';
                                    let numbers = '0123456789';
                                
                                    for (var i=0; i < text.length; i++) {
                                        if(numbers.indexOf(text[i]) > -1 ) {
                                            newText = newText + text[i];
                                        }
                                        else {
                                            // your call back function
                                            alert("please enter numbers only");
                                        }
                                    }
                                    this.setState({ myNumber: newText });
                                   }}
                                   */
                                   maxLength={5}/>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.creatingButton} >
                            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}> CREATE </Text>
                        </View>
                    </TouchableOpacity>
                    
                    
                </View>
                
            </View>
            

        </View>
    )

}





export default PostingCreation


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
    creatingButton: {
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