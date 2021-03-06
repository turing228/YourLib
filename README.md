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

### Use Cases or Questions to You

  1. How do you store all .pdf textbooks or links to them? It's Mathematical Analysis, Probability Theory, Discrete Mathematics, Economics, History, Foreign Language and a lot of other textbooks!
  2. Do you like to cook? How do you don't forget all amazing recipes, lifehacks?
  3. How do you remember everything what is not written anywhere on the Internet? For example: nice bars, night clubs, places for walking with you friends

This application is designed to solve these and other your problems!

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

### Main Pages

<p align="center">
  <img src="/examples/UI/4.jpg" width="166">
  <img src="/examples/UI/13.jpg" width="166">
  <img src="/examples/UI/12.jpg" width="166">
  <img src="/examples/UI/16.jpg" width="166">
  <img src="/examples/UI/19.jpg" width="166">
</p>

### All Pages!
<details>
  <summary>Click to view all screenshots!</summary>

### First Pages
<p>
  <img src="/examples/UI/1.jpg" width="200">
  <img src="/examples/UI/2.jpg" width="200">
</p>

### Registration
<p>
  <img src="/examples/UI/3.jpg" width="200">
  <img src="/examples/UI/4.jpg" width="200">
  <img src="/examples/UI/5.jpg" width="200">
  <img src="/examples/UI/6.jpg" width="200">
</p>

### Create Directories
<p>
  <img src="/examples/UI/7.jpg" width="200">
  <img src="/examples/UI/8.jpg" width="200">
  <img src="/examples/UI/9.jpg" width="200">
</p>

### Create Subdirectories
<p>
  <img src="/examples/UI/10.jpg" width="200">
  <img src="/examples/UI/11.jpg" width="200">
  <img src="/examples/UI/12.jpg" width="200">
  <img src="/examples/UI/13.jpg" width="200">
</p>

### Create Notes
<p>
  <img src="/examples/UI/14.jpg" width="200">
  <img src="/examples/UI/15.jpg" width="200">
  <img src="/examples/UI/16.jpg" width="200">
</p>

### All Notes Screen
<p>
  <img src="/examples/UI/17.jpg" width="200">
</p>

### Remove Subdirectory
<p>
  <img src="/examples/UI/18.jpg" width="200">
  <img src="/examples/UI/19.jpg" width="200">
  <img src="/examples/UI/20.jpg" width="200">
</p>

### Remove Directory
<p>
  <img src="/examples/UI/20.jpg" width="200">
  <img src="/examples/UI/21.jpg" width="200">
  <img src="/examples/UI/22.jpg" width="200">
  <img src="/examples/UI/23.jpg" width="200">
</p>

### All Notes Screen Again
<p>
  <img src="/examples/UI/24.jpg" width="200">
</p>
</details>

## 🚄 Roadmap

| Version | Feature/Action Description | Date |
|:--:|--|:--:|
| 0.1 | **User Interface Skeleton** | ✔️25.10.2019 |
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
| 0.2 | **Cloud Sync and a lot of UI-work** | ✔️29.10.2019 |
| | UI: Bullet points in subdirectories list | ✔️26.10.2019 |
| | UI: Ability to delete directories or subdirectories | ✔️26.10.2019 |
| | UI: Alert before permanently deleting | ✔️26.10.2019 |
| | UI: Sidebar navigation (between home and settings) | ✔️26.10.2019 |
| | Spaghetti Code | ✔️26.10.2019 |
| | Fix spaghetti code (restructure project architecture) | ✔️28.10.2019 |
| | Connect Firebase auth with the project | ✔️26.10.2019 |
| | UI: Make registration by mobile number screens | ✔️26.10.2019 |
| | UI: Make simple settings screen to check whether you signed in or not with sign in and sign out functionality | ✔️26.10.2019 |
| | UI: Global font sizes | ✔️28.10.2019 |
| | Connect Firebase realtime database with the project | ✔️28.10.2019 |
| | Write rules for the realtime database to store "notes" | ✔️28.10.2019 |
| | Store/download/sync data with the realtime database: add and remove directories | ✔️29.10.2019 |
| | Store/download/sync data with the realtime database: add and remove subdirectories | ✔️29.10.2019 |
| | Store/download/sync data with the realtime database: add notes | ✔️29.10.2019 |
| | All Notes Screen | ✔️29.10.2019 |
| | [Enable Firebase Database offline capabilities for Mobile app](https://invertase.io/oss/react-native-firebase/v6/database/quick-start) | ✔️28.10.2019 |
| | Make new screenshots and add them to the repository | ✔️29.10.2019 |
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
| | Editing/removing notes | |
| | Whole directory screen | |
| | Delete account button | |
| | Current sync status | |
| | "Create your first directory" scenario | |
| | Nice events-view (\& ability to add to google calendar) | |
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
