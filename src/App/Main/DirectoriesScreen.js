import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, FlatList, View } from 'react-native';

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

function Subdirectory({ item }) {
    return(
        <View style={styles.subdirectory}>
            <Text style={styles.subdirectoryTitle}>{item.title}</Text>
        </View>  
    );
}

function Item({ item }) {
    return (
        <View style={styles.item}>
            <Avatar
                size="medium"
                overlayContainerStyle={{ backgroundColor: item.title.toRGB() }}
                rounded
                title={getInitials(item.title)}
            />
            <View style={styles.subdirectories}>
                <Text style={[styles.title, {color: item.title.toRGB()}]}>{item.title}</Text>
                <FlatList
                    data={item.subdirectories}
                    renderItem={({ item }) => <Subdirectory item={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

class DirectoriesView extends Component {
    //static navigationOptions = ({navigation}: Props) => ({
    //    
    //});

    constructor(props) {
        super(props);

        this.state = {

            directories: [
                {
                    id: 0,
                    title: 'My Home',
                    subdirectories: [
                        {
                            id: 0,
                            title: 'events',
                        },
                        {
                            id: 1,
                            title: 'hw',
                        },
                        {
                            id: 2,
                            title: 'links',
                        },
                    ]
                },
                {
                    id: 1,
                    title: 'Work',
                    subdirectories: [
                        {
                            id: 0,
                            title: 'events',
                        },
                        {
                            id: 1,
                            title: 'links',
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'University',
                    subdirectories: [
                        {
                            id: 0,
                            title: 'events',
                        },
                        {
                            id: 1,
                            title: 'hw',
                        },
                        {
                            id: 2,
                            title: 'books',
                        },
                        {
                            id: 3,
                            title: 'links',
                        },
                    ]
                },
                {
                    id: 3,
                    title: 'University',
                },
                {
                    id: 4,
                    title: 'University',
                },
                {
                    id: 5,
                    title: 'University',
                },
                {
                    id: 6,
                    title: 'University',
                },
                {
                    id: 7,
                    title: 'University',
                },
            ],

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                {/* <ScrollView style={styles.scrollView}> */}
                <FlatList
                    data={this.state.directories}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
                {/* </ScrollView> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'aliceblue',
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'white',
    },
    item: {
        // backgroundColor: '#f9c2ff',
        // padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    title: {
        fontSize: 23,
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
        marginVertical: 10,
        // marginHorizontal: 16,
    },
    subdirectoryTitle: {
        fontSize: 18,
        marginTop: 10,
    },    
})

export default DirectoriesView;