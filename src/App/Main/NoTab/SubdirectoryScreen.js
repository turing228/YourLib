import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat'
import { Bubble } from 'react-native-gifted-chat'
import GoBackButton from '../../../Components/GoBackButton';

class SubdirectoryView extends Component {
    static navigationOptions = ({ navigation }: Props) => ({
        headerTitle: (
            <Text style={styles.headerTitleText}>{navigation.getParam("subdirectoryTitle")}</Text>
        ),
        headerLeft: (<GoBackButton navigation={navigation}/>),
        headerRight: null,
        headerTintColor: "white",
        headerStyle: styles.headerStyle,
    });

    constructor(props) {
        super(props);

        this.state = {
            subdirectoryKey: props.navigation.getParam("subdirectoryKey"),
            subdirectoryTitle: props.navigation.getParam("subdirectoryTitle"),

            // messages: props.navigation.getParam("subdirectory").messages,
            messages: [],
        }
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
                    messages={this.state.messages}
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