YourLib
-------------------------------------------------------
<p align="center">
  <img src="/examples/Logo.png" width="400" title="YourLib logo">
</p>

<p align="center">
    <a href="https://github.com/turing228/YourLib/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/turing228/YourLib" title="YourLib is released under the GNU GPL license." />
    </a>
    <a href="https://github.com/turing228/YourLib/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/turing228/YourLib?color=orange" title="Contributors"/>
    </a>
    <img src="https://img.shields.io/github/v/release/turing228/YourLib" title="Release version"/>
    <img src="https://img.shields.io/github/repo-size/turing228/YourLib" title="Repository size"/>
    <img src="https://img.shields.io/badge/build-passing-brightgreen" title="Build passing"/>
    <img src="https://img.shields.io/github/stars/turing228/YourLib?style=social" title="Stars"/>
</p>

How often do you save important information by sending to yourself on social networks and forget to use it?

Cross-platform open-sourse project **YourLib** based on React Native framework let you categorize immediately it in a tree style (e.g.  ”school”, ”work”, ”home” and in each ”events”, ”links”, ”books”) and sync it with Google Firebase cloud.

## Contents

- [Quickstart](#-quickstart)
- [Roadmap](#-roadmap)
- [Motivation](#-motivation)
- [Screens](#-screens)
- [Tecnhologies](#-tecnhologies)
- [Contributors](#-contributors)
- [License](#-license)

## 🚀 Quickstart

Clone this repository :

    git clone https://github.com/turing228/YourLib.git
    cd YourLib

Install packages :

    npm install

Configure Firebase to be used with React Native application according to [official instruction](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup)

Create Firebase Realtime Database with rules from file [database_rules.txt](/database_rules.txt)

When installation is complete, run with version of your choice :

    react-native run-ios
    # or
    react-native run-android

## 🚄 Roadmap

1. Make roadmap

## 🏆 Motivation

Here are just the first two slides of [the business presentation. Check it for more details!][p]

<img src="/examples/First%20slide%20of%20the%20presentation.png" width="1080" title="First Slide of the Presentation">

<img src="/examples/Second%20slide%20of%20the%20presentation.png" width="1080" title="Second Slide of the Presentation">

## 📸 Screens

<img src="/examples/Main%20window.png" width="1080" title="Main window">

<img src="/examples/Inside%20directory.png" width="1080" title="Inside the directory">

## 📋 Tecnhologies

- [React Native](https://facebook.github.io/react-native/) - Facebook cross-platform (Android/IOS) mobile app development framework
- [redux-persist](https://github.com/rt2zz/redux-persist) - to store data on the mobile device
- [react-native-firebase](https://github.com/invertase/react-native-firebase) - library for using [Google Firebase](https://firebase.google.com) in the application
- [react-navigation](https://github.com/react-navigation/react-navigation) - library for advanced navigation between screens of the application
 
 ## 👪 Contributors

You are welcome! We have [roadmap of planned changes](#-roadmap) - just pick any task you want, impelement it and make pull request! Or write issue to discuss problems and ideas.

Current contributors list:

<a href="https://github.com/turing228" title="Github profile of Nikita Lisovetin">
    <img src="https://github.com/turing228.png" width="40" height="40">
    Nikita Lisovetin, student of ITMO University, Department of Computer Technologies. Developer.
</a>
 
 ## 📄 License

YourLib is GNU GPL licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/turing228/trigram_grep/blob/master/LICENSE
[p]: https://github.com/turing228/YourLib/blob/master/examples/YourLib.pdf
