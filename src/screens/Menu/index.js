import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
            </View>
        );
    }
}