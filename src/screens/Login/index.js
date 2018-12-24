
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { TextField } from 'react-native-material-textfield';
import * as color from '../../constants/colors';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.onLoginPress = this.onLoginPress.bind(this);
        this.onSignupPress = this.onSignupPress.bind(this);
        this.state = {
            mobile: '',
            password: ''
        }
    }

    onLoginPress() {
        alert('LoginPress')
    }
    onSignupPress() {
        alert('SignupPress')
    }
    render() {
        let { mobile, password } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ margin: 20 }}>
                    <TextField
                        disabledLineWidth={2}
                        textColor={'white'}
                        tintColor={color.COLOR_PRIMARY}
                        titleTextStyle={{ color: color.COLOR_PRIMARY }}
                        baseColor={color.COLOR_PRIMARY}
                        maxLength={10}
                        keyboardType={'number-pad'}
                        label='Mobile Number'
                        value={mobile}
                        onChangeText={(mobile) => this.setState({ mobile })}
                    />
                    <TextField
                        textColor={'white'}
                        disabledLineWidth={2}
                        tintColor={color.COLOR_PRIMARY}
                        titleTextStyle={{ color: color.COLOR_PRIMARY }}
                        baseColor={color.COLOR_PRIMARY}
                        secureTextEntry
                        label='Password'
                        value={password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <RaisedTextButton title='Login' titleColor={'white'} titleStyle={{ color: 'white' }} style={{ backgroundColor: color.COLOR_PRIMARY, marginTop: 20 }} />
                    <TextButton title={`Don't have account? Create account`} titleColor={'white'} titleStyle={{ fontSize: 12 }} style={{ marginTop: 20 }} />
                </View>
            </View>
        );
    }
}
