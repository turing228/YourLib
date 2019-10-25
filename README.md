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

How often do you save important information by sending it to yourself on social networks and forget to use it?

Cross-platform open-source project **YourLib** based on React Native framework lets you categorize immediately it in a tree-style (e.g.  ”school”, ”work”, ”home” and in each ”events”, ”links”, ”books”) and sync it with Google Firebase cloud.

## Contents

- [YourLib](#yourlib)
- [Contents](#contents)
- [🚀 Quickstart](#%f0%9f%9a%80-quickstart)
- [🚄 Roadmap](#%f0%9f%9a%84-roadmap)
- [🏆 Motivation](#%f0%9f%8f%86-motivation)
- [📸 Screens](#%f0%9f%93%b8-screens)
- [📋 Technologies](#%f0%9f%93%8b-technologies)
- [👪 Contributors](#%f0%9f%91%aa-contributors)
- [📄 License](#%f0%9f%93%84-license)

## 🚀 Quickstart

Clone this repository :

    git clone https://github.com/turing228/YourLib.git
    cd YourLib

Install packages :

    npm install

Configure Firebase to be used with React Native application according to [official instruction](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup)

Create Firebase Realtime Database with rules from file [database_rules.txt](/database_rules.txt)

When the installation is complete, run with a version of your choice :

    react-native run-ios
    # or
    react-native run-android

## 🚄 Roadmap

| Version | Feature/Action Description | Date |
|:--:|--|:--:|
| 0.1 | **User Interface** | |
| | Create default project | ✔️ 25.10.2019 |
| | Implement tab navigation for "directories" and "all notes" | ✔️ 25.10.2019 |
| | Make the main screen: directories, their circle avatars, and subdirectories list | ✔️ 25.10.2019 |
| | Make the main screen: clickable subdirectories | ✔️ 25.10.2019 |
| | Make the main screen: add new directory button and the special screen | ✔️ 25.10.2019 |
| | Make the main screen: add new subdirectory button and the special screen | ✔️ 25.10.2019 |
| | Make the inside a subdirectory screen: hide topTabBar | ✔️ 25.10.2019 |
| | Make the inside a subdirectory screen: pass subdirectory content to this screen | |
| | Make the inside a subdirectory screen: gifted chat UI | |
| | Make the inside a subdirectory screen: goback arrow in the header | |
|--|--|--|
| 0.2 | **Cloud Sync** | |
| | Connect Firebase auth with the project | |
| | Make registration by mobile number screens | |
| | Connect Firebase realtime database with the project | |
| | Write rules for the realtime database to store "notes" | |
| | Store/download/sync data with the realtime database | |
|--|--|--|
| 0.3 | **Offline Work** | |
| | Add redux-persist to avoid full refresh of data every app start | |
| | Implement the store config | |
| | Implement actions and reducers | |
| | Embed the solution in (screens) code | |
|--|--|--|
| unplanned | **Feel free to implement this or suggest something new and make a pull request!** | |
| | Make the color-theme selectable | |
| | Implement functionality for adding new notes via "Share" button | |
| | "Add image" | |
| | Image synchronization with the Amazon Database or other image hosting | |
| | Implement nice fast-preview/view of links | |
| | Hide top bars during scrolling | |
| | Ability to reorder FlatLists (of directories and subdirectories) | |
|--|--|--|
| in future | **Kickstarter Сampaign** | |
| | Implement smart Machine Learning based suggestions of categorizing | |
| | Implement smart advertisement based on notes | |
| | Website | |
| | Desktop application | |

## 🏆 Motivation

Here are just the first two slides of [the business presentation. Check it for more details!][p]

<img src="/examples/First%20slide%20of%20the%20presentation.png" width="1080" title="First Slide of the Presentation">

<img src="/examples/Second%20slide%20of%20the%20presentation.png" width="1080" title="Second Slide of the Presentation">

## 📸 Screens

<img src="/examples/Main%20window.png" width="1080" title="Main window">

<img src="/examples/Inside%20directory.png" width="1080" title="Inside the directory">

## 📋 Technologies

- [React Native](https://facebook.github.io/react-native/) - Facebook cross-platform (Android/IOS) mobile app development framework
- [redux-persist](https://github.com/rt2zz/redux-persist) - to store data on the mobile device
- [react-native-firebase](https://github.com/invertase/react-native-firebase) - library for using [Google Firebase](https://firebase.google.com) in the application
- [react-navigation](https://github.com/react-navigation/react-navigation) - library for advanced navigation between screens of the application
 
 ## 👪 Contributors

You are welcome! We have [roadmap of planned changes](#-roadmap) - just pick any task you want, implement it and make a pull request! Or write an issue to discuss problems and ideas.

Current contributors list:

<a href="https://github.com/turing228" title="Github profile of Nikita Lisovetin">
    <img src="https://github.com/turing228.png" width="40" height="40">
    Nikita Lisovetin, student of ITMO University, Department of Computer Technologies. Developer.
</a>
 
 ## 📄 License

YourLib is GNU GPL licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/turing228/trigram_grep/blob/master/LICENSE
[p]: https://github.com/turing228/YourLib/blob/master/examples/YourLib.pdf
