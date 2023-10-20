# cordova-example

Sample Apache Cordova project with Webpack and Phaser game engine.

## Setup

- Install Android Studio with Build Tools `33.0.2`

- Setup project

```sh
jenv local 11
export PATH="${PATH}:${HOME}/.gradle/wrapper/dists/gradle-7.6-all/9f832ih6bniajn45pbmqhk2cw/gradle-7.6/bin"

mkdir www
cordova platform add android
```

- Create app in Firebase console and copy `google-services.json`` to `firebase` directory

- Build

```sh
cordova build android
```

- Open project in Android Studio and run in emulator
