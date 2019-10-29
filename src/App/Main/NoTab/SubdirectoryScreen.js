import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat'
import { Bubble } from 'react-native-gifted-chat'
import GoBackButton from '../../../Components/GoBackButton';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';

addNote = async (directoryKey, subdirectoryKey, text) => {
    let userId = await firebase.auth().currentUser.uid;

    let subdirectoryRef = await firebase.database().ref('notes/' + userId + '/directories/' + directoryKey + '/subdirectories/' + subdirectoryKey + '/messages/');

    subdirectoryRef.push({
        text: text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user_id: '1',
    })
}

getNotes = async (directoryKey, subdirectoryKey, that) => {
    let userId = await firebase.auth().currentUser.uid;

    let subdirectoryRef = await firebase.database().ref('notes/' + userId + '/directories/' + directoryKey + '/subdirectories/' + subdirectoryKey + '/messages/');

    subdirectoryRef.on('value', (dataSnapshot) => {
        let notesFB = [];
        dataSnapshot.forEach((child) => {
            notesFB = [({
                _id: child.key,
                text: child.val().text,
                createdAt: child.val().timestamp,
                user: {
                    _id: 1,
                    // name: 'kek',
                }
            }), ...notesFB];
        });
        that.setState({notes: notesFB});
    });
}


class SubdirectoryView extends Component {
    static navigationOptions = ({ navigation }: Props) => ({
        headerTitle: (
            <Text style={styles.headerTitleText}>{navigation.getParam("directoryTitle")}/{navigation.getParam("subdirectoryTitle")}</Text>
        ),
        headerLeft: (<GoBackButton navigation={navigation}/>),
        headerRight: null,
        headerTintColor: "white",
        headerStyle: styles.headerStyle,
    });

    constructor(props) {
        super(props);

        this.state = {
            directoryKey: props.navigation.getParam("directoryKey"),
            subdirectoryKey: props.navigation.getParam("subdirectoryKey"),
            subdirectoryTitle: props.navigation.getParam("subdirectoryTitle"),

            notes: [],
        }
    }

    componentDidMount() {
        getNotes(this.state.directoryKey, this.state.subdirectoryKey, this);
    }

    onSend(messages = []) {
        addNote(this.state.directoryKey, this.state.subdirectoryKey, messages[0].text);
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: "steelblue",
                        paddingLeft: 2,
                        paddingTop: 2,
                    },
                    left: {
                        backgroundColor: "white",
                        paddingLeft: 2,
                        paddingTop: 2,
                    },
                }}
            />
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <GiftedChat
                    messages={this.state.notes}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    renderUsernameOnMessage={true}
                    renderBubble={this.renderBubble}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'aliceblue',
        flex: 1,
        paddingTop: 5,
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
})

export default SubdirectoryView;