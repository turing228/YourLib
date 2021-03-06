import React, { Component } from 'react';
import { SafeAreaView, TouchableNativeFeedback, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontSizes } from '../../../Styles/fontSizes';
import GoBackButton from '../../../Components/GoBackButton';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';

addSubdirectory = async (directoryKey, title) => {
    let userId = await firebase.auth().currentUser.uid;

    let directoryRef = await firebase.database().ref('notes/' + userId + '/directories/' + directoryKey + '/subdirectories/');

    directoryRef.push({
        title: title,
    })
}

function ApproveButton({ navigation, onPress }) {
    let editing = navigation.getParam('editing', false);
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                onPress={() => {
                    onPress();
                    navigation.setParams({ editing: !editing });
                    navigation.navigate('Directories', {
                        editing: !editing,
                    });
                }}
                background={TouchableNativeFeedback.Ripple('white', true)}
                hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
            >
                <View style={styles.checkButton}>
                    <Icon name="check-bold" type="MaterialCommunityIcons" style={styles.checkIcon} />
                </View>
            </TouchableNativeFeedback>
        );
    } else {
        return (
            <TouchableOpacity
                onPress={() => {
                    onPress();
                    navigation.setParams({ editing: !editing });
                    navigation.navigate('Directories', {
                        editing: !editing,
                    });
                }}
                hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
            >
                <View style={styles.checkButton}>
                    <Icon name="check-bold" type="MaterialCommunityIcons" style={styles.checkIcon} />
                </View>
            </TouchableOpacity>
        )
    }
}

class CreateNewSubdirectoryView extends Component {
    static navigationOptions = ({ navigation }: Props) => ({
        headerTitle: (
            <Text style={styles.headerTitleText}>New Subdirectory</Text>
        ),
        headerLeft: (
            <GoBackButton navigation={navigation} />
        ),
        headerRight: (
            <ApproveButton navigation={navigation} onPress={navigation.getParam('addSubdirectory')} />
        ),
        headerTintColor: "white",
        headerStyle: styles.headerStyle,
    });

    constructor(props) {
        super(props);

        this.state = {
            title: '',

            directoryKey: this.props.navigation.getParam('directoryKey'),
            directoryTitle: this.props.navigation.getParam('directoryTitle'),
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ addSubdirectory: this._addSubdirectory })
    }

    _addSubdirectory = () => {
        addSubdirectory(this.state.directoryKey, this.state.title);
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.content}>
                    <Text style={styles.text}>Directory: {this.state.directoryTitle}</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>Enter the name of the new subdirectory:</Text>
                    <TextInput style={styles.textInput} autoFocus={true} autoCapitalize={'none'} onChangeText={(text) => this.setState({ title: text })} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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
    checkIcon: {
        marginRight: 15,
        fontSize: fontSizes.h1Text,
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
        fontSize: fontSizes.bodyText,
    },
    textInput: {
        borderBottomWidth: 1,
        fontSize: fontSizes.inputText,
    },
})

export default CreateNewSubdirectoryView;