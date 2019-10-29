import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat'
import { Bubble } from 'react-native-gifted-chat'
import { InputToolbar } from 'react-native-gifted-chat'

import { Avatar } from 'react-native-elements';
import { fontSizes } from '../../../Styles/fontSizes';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';

getData = async (that) => {
    notes = {};

    let userId = await firebase.auth().currentUser.uid;

    let userDataRef = await firebase.database().ref('notes/' + userId + '/directories/');

    userDataRef.on('child_added', (data) => {
        that.setState({ test: 'lol2' });
        notes[data.key] = data.val();
        that.setState({ notes: notes });
    })

    userDataRef.on('child_changed', (data) => {
        notes[data.key] = data.val();
        that.setState({ notes: notes });
    })

    userDataRef.on('child_removed', (data) => {
        delete notes[data.key];
        that.setState({ notes: notes });
    })
}

unsubscribeData = async () => {
    let userId = await firebase.auth().currentUser.uid;

    let userDataRef = await firebase.database().ref('notes/' + userId + '/directories/');

    userDataRef.off();
}

function compareTimes(a, b) {
    if (a.createdAt < b.createdAt) {
        return 1;
    }
    if (a.createdAt > b.createdAt) {
        return -1;
    }
    return 0
}

getJustNotes = (notes) => {
    let arrayNotes = Object.entries(notes);

    let allNotes = [];

    arrayNotes.forEach((directory) => {
        if (directory[1].subdirectories) {
            let arraySubdirectories = Object.entries(directory[1].subdirectories);
            arraySubdirectories.forEach((subdirectory) => {
                if (subdirectory[1].messages) {
                    let arrayMessages = Object.entries(subdirectory[1].messages);
                    arrayMessages.forEach((child) => {
                        allNotes = [({
                            _id: child[0],
                            text: child[1].text,
                            createdAt: child[1].timestamp,
                            user: {
                                _id: getBeforeSlash(directory[1].title),
                                name: directory[1].title + '/' + subdirectory[1].title,
                            }
                        }), ...allNotes];
                    });
                }
            })
        }
    })
    return allNotes.sort(compareTimes);
}

function getBeforeSlash(string) {
    return string.split('/')[0];
}

function getInitials(string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

String.prototype.toRGB = function () {
    var hash = 0;
    if (this.length === 0) return hash;
    for (var i = 0; i < this.length; i++) {
        hash = this.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    var rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        rgb[i] = value;
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}


class AllNotesView extends Component {
    constructor(props) {
        super(props);

        this.unsubscribe = null;
        this.state = {

            user: null,

            token: null,

            notes: {},
        }
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                this.setState({ token: await user.getIdToken() });
                this.setState({ user: await user.toJSON() });
                getData(this);
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
        if (user) {
            unsubscribeData();
        }
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
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

    renderAvatar = (props) => {
        let name = props.currentMessage.user.name;
        return (
            // <Text>{JSON.stringify(props.currentMessage.user.name)}</Text>
            <Avatar
                size="small"
                overlayContainerStyle={{ backgroundColor: getBeforeSlash(name).toRGB() }}
                rounded
                titleStyle={styles.avatarTitleStyle}
                title={getInitials(getBeforeSlash(name))}
            />
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <GiftedChat
                    messages={getJustNotes(this.state.notes)}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    renderUsernameOnMessage={true}
                    renderBubble={this.renderBubble}
                    renderInputToolbar={() => null}
                    renderComposer={() => null}
                    minInputToolbarHeight={0}
                    renderAvatar={this.renderAvatar}
                />
            </SafeAreaView>
        )
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
    avatarTitleStyle: {
        fontSize: fontSizes.bodyText,
    },
})

export default AllNotesView;