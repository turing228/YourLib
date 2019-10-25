import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CreateNewDirectoryView extends Component {
    static navigationOptions = ({navigation}: Props) => ({
        headerTitle: (
            <Text style={styles.headerTitleText}>Create New Directory</Text>
        ),
        headerRight: <Icon name="check-bold" type="MaterialCommunityIcons" style={styles.checkIcon} />,
        headerTintColor: "white",
        headerStyle: styles.headerStyle, 
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.content}>
                    <Text style={styles.text}>Enter the name of the new directory:</Text>
                    <TextInput style={styles.textInput} autoFocus={true} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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
    checkIcon: {
        marginRight: 15,
        fontSize: 23,
        color: "white",
    },
    safeAreaView: {
        backgroundColor: 'white',
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'white',
    },
    content: {
        margin: 15,
    },
    text: {
        fontSize: 18,
    },
    textInput: {
        borderBottomWidth: 1,
        fontSize: 23,
    },
})

export default CreateNewDirectoryView;