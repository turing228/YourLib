import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat'
import { Bubble } from 'react-native-gifted-chat'
import { InputToolbar } from 'react-native-gifted-chat'

let messages = [
    {
        _id: 0,
        text: 'https://www.wikihow.com/Pick-Up-a-Girl',
        createdAt: new Date(),
        user: {
            _id: 3,
            name: 'My Home/links/',
            // avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Test work on mathematical analysis 15:20 November 2',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'University/events/Telegram',
            // avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: 'Startup workshop 18:30 on November 10 in audience 285',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'University/events/',
            // avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 3,
        text: 'Celebrating grandmother\'s birthday at 18:00 on October 29',
        createdAt: new Date(),
        user: {
            _id: 3,
            name: 'My Home/events/',
            // avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 4,
        text: 'https://en.wikipedia.org/wiki/Bayes%27_theorem',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'University/links/',
            // avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 5,
        text: 'Deadline for homework on algorithms and data structures November 15',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'University/events/',
            // avatar: 'https://placeimg.com/140/140/any',
        },
    },
]

class AllNotesView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

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

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    renderUsernameOnMessage={true}
                    renderBubble={this.renderBubble}
                    renderInputToolbar={() => null}
                    renderComposer={() => null}
                    minInputToolbarHeight={0}
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

export default AllNotesView;