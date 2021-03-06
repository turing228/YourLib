import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';

import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { fontSizes } from '../../Styles/fontSizes';

class SettingsView extends Component {
    static navigationOptions = ({ navigation }: Props) => ({
        headerTitle: (
            <Text style={styles.headerTitleText}>Settings</Text>
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
        }
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                this.setState({token: await user.getIdToken()});
                this.setState({user: await user.toJSON()});
            } else {
                // User has been signed out, reset the state
                this.setState({
                    userObject: null,
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

    signOut = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.content}>
                    {/* <Text style={styles.text}>Enter the name of the new directory:</Text> */}
                    {/* <TextInput style={styles.textInput} autoFocus={true} /> */}
                    {!this.state.user &&
                        <View>
                            <Text style={styles.text}>You are not signed in</Text>
                            <TouchableOpacity style={styles.signInButton} onPress={() => this.props.navigation.navigate('Auth')}>
                                <Text style={styles.signInText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>}
                    {this.state.user &&
                        <View>
                            <Text style={styles.text}>You are successfully signed in</Text>
                            <TouchableOpacity style={styles.signOutButton} onPress={() => this.signOut()}>
                                <Text style={styles.signOutText}>Sign Out</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'aliceblue',
        flex: 1,
        // paddingHorizontal: 16,
        // paddingVertical: 8,
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
    signOutButton: {
        backgroundColor: "grey",
        marginHorizontal: 15,
        marginVertical: 30,
        borderRadius: 5,
    },
    signOutText: {
        marginVertical: 5,
        color: "white",
        fontSize: fontSizes.bodyText,
        alignSelf: "center",
    },
})

export default SettingsView;