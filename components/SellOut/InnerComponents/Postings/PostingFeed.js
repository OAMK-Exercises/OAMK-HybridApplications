import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostingFeed = (props) => {

    return (
        <View style={{flex: 1}}>
            <Text> {props.title} </Text>
            <Text> {props.description} </Text>
            <Text> {props.category} </Text>
            <Text> {props.deliveryType} </Text>
            <Text> {props.sellerEmail} </Text>
            <Text> {props.phoneNumber} </Text>
        </View>
    )
}

export default PostingFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
