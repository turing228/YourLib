import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity, Alert } from 'react-native';

import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

function deleteDirectory(directory) {
    return (
        Alert.alert(
            'Delete "' + directory.title + '"?',
            'Are you sure you want to delete this directory?\n\nThis operation cannot be undone, it is irreversible',
            [
                // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                },
            ],
            { cancelable: false },
        )
    );
}
function deleteSubdirectory(subdirectory) {
    return (
        Alert.alert(
            'Delete "' + subdirectory.title + '"?',
            'Are you sure you want to delete this subdirectory?\n\nThis operation cannot be undone, it is irreversible',
            [
                // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                },
            ],
            { cancelable: false },
        )
    );
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

function Subdirectory({ item, navigation }) {
    return (
        <View>
            {!navigation.getParam("editing") &&
                <TouchableOpacity style={styles.subdirectory} onPress={() => navigation.navigate('Subdirectory', { subdirectory: item })}>
                    <Text style={styles.subdirectoryTitle}>• {item.title}</Text>
                </TouchableOpacity>}
            {navigation.getParam("editing") &&
                <TouchableOpacity style={styles.subdirectory} onPress={() => deleteSubdirectory(item)}>
                    <Text style={styles.subdirectoryTitle}><Icon name="clear" type="MaterialIcons" style={styles.clearIcon} /> {item.title}</Text>
                </TouchableOpacity>}
        </View>
    );
}

function CreateNewSubirectory({ navigation }) {
    return (
        <View>
            {navigation.getParam("editing") &&
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('CreateNewSubdirectory')}>
                    <Text style={styles.createNewSubdirectoryText}><Icon name="add" type="MaterialIcons" style={styles.addIcon} /> create new subdirectory</Text>
                </TouchableOpacity>}
        </View>
    );
}

function Directory({ item, navigation }) {
    return (
        <View style={styles.item}>
            <View>
                <Avatar
                    size="medium"
                    overlayContainerStyle={{ backgroundColor: item.title.toRGB() }}
                    rounded
                    title={getInitials(item.title)}
                />
                {navigation.getParam("editing") &&
                    <TouchableOpacity style={styles.clearDirectory} onPress={() => deleteDirectory(item)}>
                        <View style={styles.circle} />
                        <Text style={styles.subdirectoryTitle}><Icon name="clear" type="MaterialIcons" style={styles.clearDirectoryIcon} /></Text>
                    </TouchableOpacity>}
            </View>
            <View style={styles.subdirectories}>
                <Text style={[styles.directoryTitle, { color: item.title.toRGB() }]}>{item.title}</Text>
                <FlatList
                    data={item.subdirectories}
                    renderItem={({ item }) => <Subdirectory item={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<CreateNewSubirectory navigation={navigation} />}
                />
            </View>
        </View>
    );
}

class DirectoriesView extends Component {
    static navigationOptions = {
        // drawerLabel: 'Home',
        // drawerIcon: ({ tintColor }) => (
        //   <Image
        //     source={<Text>lol</Text>}
        //     // style={[styles.icon, { tintColor: tintColor }]}
        //   />
        // ),
      };

    constructor(props) {
        super(props);

        this.state = {

            user: null,

            editing: props.navigation.getParam('editing', false),

            creationOfNewDirectory: false,

            directories: [
                {
                    id: '0',
                    title: 'My Home',
                    subdirectories: [
                        {
                            id: '0',
                            title: 'events',
                            messages: [
                                {
                                    _id: '0',
                                    text: 'Celebrating grandmother\'s birthday at 18:00 on October 29',
                                    createdAt: new Date(),
                                    user: {
                                        _id: 1,
                                        name: 'I',
                                        // avatar: 'https://placeimg.com/140/140/any',
                                    },
                                },
                            ],
                        },
                        {
                            id: '1',
                            title: 'hw',
                        },
                        {
                            id: '2',
                            title: 'links',
                        },
                    ]
                },
                {
                    id: '1',
                    title: 'Work',
                    subdirectories: [
                        {
                            id: '0',
                            title: 'events',
                        },
                        {
                            id: '1',
                            title: 'links',
                        },
                    ]
                },
                {
                    id: '2',
                    title: 'University',
                    subdirectories: [
                        {
                            id: '0',
                            title: 'events',
                            messages: [
                                {
                                    _id: 0,
                                    text: 'Test work on mathematical analysis 15:20 November 2',
                                    createdAt: new Date(),
                                    user: {
                                        _id: 2,
                                        name: 'Telegram',
                                        // avatar: 'https://placeimg.com/140/140/any',
                                    },
                                },
                                {
                                    _id: 1,
                                    text: 'Startup workshop 18:30 on November 10 in audience 285',
                                    createdAt: new Date(),
                                    user: {
                                        _id: 1,
                                        name: 'I',
                                        // avatar: 'https://placeimg.com/140/140/any',
                                    },
                                },
                                {
                                    _id: 2,
                                    text: 'Deadline for homework on algorithms and data structures November 15',
                                    createdAt: new Date(),
                                    user: {
                                        _id: 1,
                                        name: 'I',
                                        // avatar: 'https://placeimg.com/140/140/any',
                                    },
                                },
                            ],
                        },
                        {
                            id: '1',
                            title: 'hw',
                        },
                        {
                            id: '2',
                            title: 'books',
                        },
                        {
                            id: '3',
                            title: 'links',
                        },
                    ]
                },
                {
                    id: '3',
                    title: 'University',
                },
                {
                    id: '4',
                    title: 'University',
                },
                {
                    id: '5',
                    title: 'University',
                },
                {
                    id: '6',
                    title: 'University',
                },
                {
                    id: '7',
                    title: 'University',
                },
            ],

        }
    }

    componentDidMount() {

    }

    ListHeader() {
        return (
            <View>
                {this.props.navigation.getParam('editing', false) &&
                    <TouchableOpacity style={styles.addNewDirectoryButton} onPress={() => this.props.navigation.navigate('CreateNewDirectory')}>
                        <Text style={styles.addNewDirectoryText}>CREATE NEW DIRECTORY</Text>
                    </TouchableOpacity> &&
                    <TouchableOpacity style={styles.addNewDirectoryButton} onPress={() => this.props.navigation.navigate('CreateNewDirectory')}>
                        <Text style={styles.addNewDirectoryText}>CREATE NEW DIRECTORY</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <FlatList
                    data={this.state.directories}
                    renderItem={({ item }) => <Directory item={item} navigation={this.props.navigation} />}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={this.ListHeader()}
                    paddingTop={5}
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
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    directoryTitle: {
        fontSize: 23,
        marginBottom: 8,
    },
    subdirectories: {
        marginLeft: 10,
        flex: 1,
        paddingTop: 5,
        paddingLeft: 16,
        backgroundColor: "white",
        borderRadius: 15,
        borderWidth: 0.1,
        borderColor: "darkgrey",
    },
    subdirectory: {
        marginBottom: 16,
    },
    subdirectoryTitle: {
        fontSize: 18,
        marginTop: 0,
    },
    addNewDirectoryButton: {
        backgroundColor: "steelblue",
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 5,
    },
    addNewDirectoryText: {
        marginVertical: 5,
        color: "white",
        fontSize: 18,
        alignSelf: "center",
    },
    createNewSubdirectoryText: {
        fontSize: 18,
        marginBottom: 16,
        color: "steelblue",
    },
    addIcon: {
        fontSize: 18,
        color: "green",
    },
    clearIcon: {
        fontSize: 18,
        color: "red",
    },
    clearDirectory: {
        position: "absolute",
        top: 35,
        right: -5,
    },
    clearDirectoryIcon: {
        fontSize: 23,
        color: "white",
    },
    circle: {
        width: 26,
        height: 26,
        borderRadius: 26 / 2,
        backgroundColor: "red",
        position: 'absolute',
        borderWidth: 2,
        borderColor: "aliceblue",
        top: -3 / 2,
        left: -3 / 2,
    }
})

export default DirectoriesView;