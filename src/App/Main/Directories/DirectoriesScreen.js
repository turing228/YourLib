import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';

import { Avatar } from 'react-native-elements';

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
        <TouchableOpacity style={styles.subdirectory} onPress={() => navigation.navigate('Subdirectory')}>
            <Text style={styles.subdirectoryTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
}

function Directory({ item, navigation }) {
    return (
        <View style={styles.item}>
            <Avatar
                size="medium"
                overlayContainerStyle={{ backgroundColor: item.title.toRGB() }}
                rounded
                title={getInitials(item.title)}
            />
            <View style={styles.subdirectories}>
                <Text style={[styles.directoryTitle, { color: item.title.toRGB() }]}>{item.title}</Text>
                <FlatList
                    data={item.subdirectories}
                    renderItem={({ item }) => <Subdirectory item={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                    ListFooterComponent={navigation.getParam("editing") &&
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('CreateNewSubirectory')}>
                        <Text style={styles.createNewSubdirectoryText}>+ create new subdirectory</Text>
                    </TouchableOpacity>
                }
                />
            </View>
        </View>
    );
}

class DirectoriesView extends Component {
    constructor(props) {
        super(props);

        this.state = {

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
                    </TouchableOpacity>}
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
    // scrollView: {
        // backgroundColor: 'white',
    // },
    item: {
        // backgroundColor: '#f9c2ff',
        // padding: 20,
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
        // paddingLeft: 10,
        paddingTop: 5,
        paddingLeft: 16,
        backgroundColor: "white",
        borderRadius: 15,
        borderWidth: 0.1,
        borderColor: "darkgrey",
    },
    subdirectory: {
        marginBottom: 16,
        // marginHorizontal: 16,
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
    }
})

export default DirectoriesView;