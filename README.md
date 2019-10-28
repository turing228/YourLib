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
    <a href="https://github.com/turing228/YourLib/releases">
        <img src="https://img.shields.io/github/v/release/turing228/YourLib" title="Release version"/>
    </a>
    <img src="https://img.shields.io/github/repo-size/turing228/YourLib" title="Repository size"/>
    <img src="https://img.shields.io/badge/build-passing-brightgreen" title="Build passing"/>
    <a href="https://github.com/turing228/YourLib/stargazers">
        <img src="https://img.shields.io/github/stars/turing228/YourLib?style=social" title="Stars"/>
    </a>
</p>

How often do you save important information by sending it to yourself on social networks and forget to use it?

Cross-platform open-source project **YourLib** based on React Native framework lets you categorize immediately it in a tree-style (e.g.  ”school”, ”work”, ”home” and in each ”events”, ”links”, ”books”) and sync it with Google Firebase cloud.

## Contents

- [🚀 Quickstart](#-quickstart)
- [🍔 Screenshots](#-screenshots)
- [🚄 Roadmap](#-roadmap)
- [🏆 Motivation](#-motivation)
- [📸 Concept](#-concept)
- [📋 Technologies](#-technologies)
- [👪 Contributors](#-contributors)
- [📄 License](#-license)

## 🚀 Quickstart

Clone this repository :

    git clone https://github.com/turing228/YourLib.git
    cd YourLib

Install packages :

    yarn install

Set up Firebase to be used with React Native application according to [official instruction](https://invertase.io/oss/react-native-firebase/quick-start/existing-project)

Create Firebase Realtime Database with rules from file [database_rules.txt](/database_rules.txt)

When the installation is complete, run with a version of your choice :

    react-native run-ios
    # or
    react-native run-android

## 🍔 Screenshots

<p align="center">
  <img src="/examples/UI/Home%20Page.jpg" width="250" title="Home Page">
  <img src="/examples/UI/Home%20Page%20create%20new.jpg" width="250" title="Home Page create new">
</p>
<p align="center">
  <img src="/examples/UI/Create%20New%20Directory.jpg" width="250" title="Create New Directory">
  <img src="/examples/UI/Create%20New%20Directory%20Internships.jpg" width="250" title="Create New Directory Internships">
  <img src="/examples/UI/Create%20New%20Subdirectory.jpg" width="250" title="Create New Subdirectory">
</p>
<p align="center">
  <img src="/examples/UI/Inside%20Subdirectory.jpg" width="250" title="Inside Subdirectory">
  <img src="/examples/UI/All%20Notes%20Page.jpg" width="250" title="All Notes Page">
</p>

## 🚄 Roadmap

| Version | Feature/Action Description | Date |
|:--:|--|:--:|
| 0.1 | **User Interface** | ✔️25.10.2019 |
| | Create default project | ✔️25.10.2019 |
| | Implement tab navigation for "directories" and "all notes" | ✔️25.10.2019 |
| | Make the main screen: directories, their circle avatars, and subdirectories list | ✔️25.10.2019 |
| | Make the main screen: clickable subdirectories | ✔️25.10.2019 |
| | Make the main screen: add new directory button and the special screen | ✔️25.10.2019 |
| | Make the main screen: add new subdirectory button and the special screen | ✔️25.10.2019 |
| | Make the inside a subdirectory screen: hide topTabBar | ✔️25.10.2019 |
| | Make the inside a subdirectory screen: subdirectory data transfer from directories screen to specific subdirectory screen | ✔️25.10.2019 |
| | Make the inside a subdirectory screen: gifted chat UI | ✔️25.10.2019 |
| | Make the inside a subdirectory screen: goback arrow in the header | ✔️25.10.2019 |
| | Make "all notes" screen | ✔️25.10.2019 |
| | Make screenshots and add them to the repository | ✔️25.10.2019 |
|--|--|--|
| 0.2 | **Cloud Sync** | |
| | UI: Bullet points in subdirectories list | ✔️26.10.2019 |
| | UI: Ability to delete directories or subdirectories | ✔️26.10.2019 |
| | UI: Alert before permanently deleting | ✔️26.10.2019 |
| | UI: Side bar navigation (between home and settings) | ✔️26.10.2019 |
| | Spaghetti Code | ✔️26.10.2019 |
| | Fix spaghetti code (restructure project architecture) | |
| | Connect Firebase auth with the project | ✔️26.10.2019 |
| | UI: Make registration by mobile number screens | ✔️26.10.2019 |
| | UI: Make simple settings screen to check whether you signed in or not with sign in and sign out functionality | ✔️26.10.2019 |
| | UI: Global font sizes | ✔️28.10.2019 |
| | Connect Firebase realtime database with the project | |
| | Write rules for the realtime database to store "notes" | |
| | Store/download/sync data with the realtime database | |
| | Make new screenshots and add them to the repository | |
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
| | Choosing icons/colors for directories | |
| | Nice animation from "edit" icon to "check" icon | |
| | Hide top bars during scrolling | |
| | Nice tab navigation between subdirectories inside a directory | |
| | Ability to reorder FlatLists (of directories and subdirectories) | |
| | Connect react-native-firebase and libs for iOS version of app | |
| | Ability to download all notes as a .json file | |
| | Ability to download all notes as a .excel file | |
| | Implement the report/feedback system | |
|--|--|--|
| in future | **Kickstarter Сampaign** | |
| | Implement smart Machine Learning based suggestions of categorizing | |
| | Implement smart advertisement based on notes (like subscriptions to news websites) | |
| | Website | |
| | Desktop application | |

The main purpose of the Kickstarter campaign is **to confirm the demand for a solution** and scale significantly **following the wishes of you, users**!

## 🏆 Motivation

Here are just the first two slides of [the business presentation. Check it for more details!][p]

<img src="/examples/First%20slide%20of%20the%20presentation.png" width="1080" title="First Slide of the Presentation">

<img src="/examples/Second%20slide%20of%20the%20presentation.png" width="1080" title="Second Slide of the Presentation">

## 📸 Concept

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
