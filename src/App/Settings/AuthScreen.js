import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { fontSizes } from '../../Styles/fontSizes';

const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

export default class PhoneAuthTest extends Component {
    static navigationOptions = ({ navigation }: Props) => ({
        headerTitle: (
            <Text style={styles.headerTitleText}>Authentication</Text>
        ),
        headerRight: null,
        headerTintColor: "white",
        headerStyle: styles.headerStyle,
    });

    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            user: null,
            message: '',
            codeInput: '',
            phoneNumber: '+44',
            confirmResult: null,
        };
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user.toJSON() });
            } else {
                // User has been signed out, reset the state
                this.setState({
                    user: null,
                    message: '',
                    codeInput: '',
                    phoneNumber: '+7',
                    confirmResult: null,
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    signIn = () => {
        const { phoneNumber } = this.state;
        this.setState({ message: 'Sending code ...' });

        firebase.auth().signInWithPhoneNumber(phoneNumber)
            .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
            .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
    };

    confirmCode = () => {
        const { codeInput, confirmResult } = this.state;

        if (confirmResult && codeInput.length) {
            confirmResult.confirm(codeInput)
                .then((user) => {
                    this.setState({ message: 'Code Confirmed!' });
                })
                .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
        }
    };

    signOut = () => {
        firebase.auth().signOut();
    }

    renderPhoneNumberInput() {
        const { phoneNumber } = this.state;

        return (
            <View>
                <Text style={styles.text}>Enter phone number:</Text>
                <TextInput
                    autoFocus
                    style={styles.textInput}
                    onChangeText={value => this.setState({ phoneNumber: value })}
                    placeholder={'Phone number ... '}
                    value={phoneNumber}
                />
                <TouchableOpacity style={styles.signInButton} onPress={this.signIn}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderMessage() {
        const { message } = this.state;

        if (!message.length) return null;

        return (
            <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
        );
    }

    renderVerificationCodeInput() {
        const { codeInput } = this.state;

        return (
            <View>
                <Text style={styles.text}>Enter verification code below:</Text>
                <TextInput
                    autoFocus
                    style={styles.textInput}
                    onChangeText={value => this.setState({ codeInput: value })}
                    placeholder={'Code ... '}
                    value={codeInput}
                />
                {/* <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} /> */}
                <TouchableOpacity style={styles.signInButton} onPress={this.confirmCode}>
                    <Text style={styles.signInText}>Confirm Code</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { user, confirmResult } = this.state;
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.content}>
                    {!user && !confirmResult && this.renderPhoneNumberInput()}

                    {!user && confirmResult && this.renderVerificationCodeInput()}
                    
                    {this.renderMessage()}

                    {user &&
                        this.props.navigation.navigate('Settings')
                    }
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'aliceblue',
        flex: 1,
    },
    headerTitleText: {
        marginLeft: 16,
        color: "white",
        fontSize: fontSizes.h1Text,
    },
    headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
        backgroundColor: "steelblue",
    },
    content: {
        margin: 15,
    },
    text: {
        fontSize: fontSizes.bodyText,
    },
    textInput: {
        borderBottomWidth: 1,
        fontSize: fontSizes.inputText,
    },
    signInButton: {
        backgroundColor: "steelblue",
        marginHorizontal: 15,
        marginVertical: 30,
        borderRadius: 5,
    },
    signInText: {
        marginVertical: 5,
        color: "white",
        fontSize: fontSizes.bodyText,
        alignSelf: "center",
    },
})
