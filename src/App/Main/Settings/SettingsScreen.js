import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';

import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/auth';

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

        this.state = {
            user: firebase.auth().currentUser.uid,
        }
    }

    componentDidMount() {

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
        fontSize: 23,
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
        fontSize: 18,
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
        fontSize: 18,
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
        fontSize: 18,
        alignSelf: "center",
    },
})

export default SettingsView;