import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class CreateNewSubdirectoryView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.content}>
                    <Text style={styles.text}>Enter the name of the new subdirectory:</Text>
                    <TextInput style={styles.textInput} autoFocus={true} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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

export default CreateNewSubdirectoryView;