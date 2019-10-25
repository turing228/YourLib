import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class CreateNewDirectoryView extends Component {
    //static navigationOptions = ({navigation}: Props) => ({
    //    
    //});

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                {/* <ScrollView style={styles.scrollView}> */}
                    <View style={styles.content}>
                        <Text style={styles.text}>Enter the name of the new directory:</Text>
                        <TextInput style={styles.textInput} autoFocus={true}/>
                    </View>
                {/* </ScrollView> */}
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

export default CreateNewDirectoryView;