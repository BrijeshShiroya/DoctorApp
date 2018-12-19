import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={{ height: 100, width: 200, backgroundColor: 'red' }}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerMenu')
                    }}><Text>Home</Text></TouchableOpacity>
            </View>
        );
    }
}
