import React, {Component} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

class SubdirectoryView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subdirectory: props.navigation.getParam("subdirectory"),
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollView}>
                    <Text>{this.state.subdirectory.title}</Text>
                    <Text>{JSON.stringify(this.state.subdirectory.messages)}</Text>
                </ScrollView>
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
})

export default SubdirectoryView;