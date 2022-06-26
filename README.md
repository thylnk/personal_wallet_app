# Happy Care

Online Health Consultation Application built with Flutter for Client, ExpressJs for Backend Server (private repo sorry 😣).

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6ade1e4b31d343f7863ddf652c17d7be)](https://www.codacy.com/gh/komkat-studio/happy-care-mobile/dashboard?utm_source=github.com&utm_medium=referral&utm_content=komkat-studio/happy-care-mobile&utm_campaign=Badge_Grade)
[![Flutter](https://img.shields.io/badge/Made%20with-Flutter-blue.svg)](https://flutter.dev/)

## Features

- Finding doctors, specializations by symptoms. <b>(Currently, the feature is based on database, will upgrade with machine learning later)</b>
- Getting online doctors, busy doctors.
- Asking member user about feeling today for finding doctor (30 mins loop).
- Chatting, sending image 1v1 between doctors and members.
- Doctors can create a new prescription for members.
- Finding doctors by specialization.
- User information CRUD.

## Technology used

- Flutter GetX pattern, [GetX](https://pub.dev/packages/get) for state management. (actually I want to use BLOC (Rx) but I only have 1 month to complete so I use Getx to do it faster. But GetX's build-in DI is so stupid)
- Authentication and Authorization using JWT.
- Backend using ExpressJs, MongoDB.
- Realtime event using Socket.io.
- Cloudinary for storing images.

## Directory structure

<!-- ```
project
│   README.md
│
│
└───lib
│   |
│   └───core
│   |   |
│   │   └───helpers <--[Helpers function like customShowDialog(context)]
│   |   |
│   │   └───themes  <--[Colors]
│   |   |
│   │   └───utils   <--[logger, validator, cache manager, sharedPref,..]
│   │
│   └───data
│   |   |
│   │   └───api  <-[Provider data from remote]
│   |   |
│   │   └───models
│   |   |
│   │   └───repositories
│   |   |
│   │   └───services
│   |           |
│   │           └───socket_io_service.dart  <--[Socket.io service]
│   │           |
│   │           └───cloudinary_service.dart <--[Cloudinary service]
│   │
│   └───modules <-[Screens, Controllers, Binding,... support modules]
│   |
│   └───routes  <-[Define routes and pages for named navigator, binding]
│   |
│   └───widgets <-[Common widgets for reusing]
│   |
│   └───main.dart
│
│
└───assets
        └───icons
        |
        └───images
        |
        └───logos
        |
        └───lottie <-[lottie animation]
        |
        └───.env <-[.env for environment]
``` -->

## Setup and run

<details>
    <summary>Click to expand</summary>
    <br>

- Setup and run
  - Yarn/npm
  - Expo
    - Install [Expo](https://docs.expo.dev/get-started/installation/).
  - Install npm dependencies:
    ```
    yarn install
    or npm install
    ```
  - Run project:
    ```
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
    ```
    </details>

## Screenshots

<details>
    <summary>View Screenshots</summary>
    <br>
1. Login Screen
<!-- ![](screenshots/intro1.png) -->
2. Main Screen
<!-- ![](screenshots/intro1.png) -->
3. Transaction Screen
<!-- ![](screenshots/intro1.png) -->
4. Detail Screen
</details>

## Todo

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/81146934?v=4" width="100px;" alt=""/><br /><sub><b>Lê Ngọc Khánh Thy</b></sub></a><br /><a href="https://github.com/thylnk" title="Code">💻</a> <a href="https://github.com/thylnk" title="Documentation">📖</a>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/67652379?v=4" width="100px;" alt=""/><br /><sub><b>Lê Thị Kim Chi</b></sub></a><br /><a href="https://github.com/kimchilee11" title="Code">💻</a> <a href="https://github.com/kimchilee11" title="Documentation">📖</a>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
