![Image one](https://i.imgur.com/3PlPuGb.png)

![Image two](https://i.imgur.com/N7MyBQO.png)


Clone 
=======================
Clone this project
```sh
git clone 
```

Setup
=======================

## React Native Packager

```sh
brew install git yarn cocoapods watchman
brew cask install android-platform-tools
npm install -g react-native-cli
```

```sh
yarn install
npm install react-native-share
react-native link react-native-share
npm install @shoutem/ui
react-native link @shoutem/ui
npm install react-native-router-flux
npm install --save-dev jest
yarn start
# Let this run in a separate window
```

Now react native bundler is running successfully.
Next up is Android and iOS tools.

## iOS

Install xcode and this should work out of the box

```sh
react-native run-ios
```

## Android

```sh
brew cask install java
brew cask install android-sdk
echo "export ANDROID_HOME=/usr/local/opt/android-sdk" >> ~/.bash_profile
source ~/.bash_profile
```

Install android studio https://developer.android.com/studio/index.html

```sh
# Shortcut
curl https://dl.google.com/dl/android/studio/install/3.4.1.0/android-studio-ide-183.5522156-mac.dmg > ~/Downloads/android-studio.dmg
open ~/Downloads/android-studio.dmg
```

Drag to Applications, open Android Studio there, hit next next next finish etc.
Take a coffee break, installing the dependencies takes a bit time.

1. Click "Open an existing android studio project"
2. Select the folder ~/project/path/android
3. Wait for everything to finish initializing, takes some time.
4. In "Messages Gradle Sync" you should see error "Failed to find target etc..", click "Install missing platform(s) and sync project".
5. Accept licenses and download stuff.
6. Repeat number 3

I personally recommend to install Android SDK Platform 25 (revision: 3) upwards 

Close Android Studio

### Running on Android device

Plug your phone in to USB port.

```sh
adb devices
```

Go to phone and check "Always allow ..." and hit Allow.

```sh
react-native run-android --appIdSuffix=debug
```

App now opens on device, but you will be prompted that the app want's to  draw overlay over other apps. Scroll down to our app and tick YES.
Go back to app, shake device and hit Reload.

### Running on Android Emulator

Create a emulator device with Google APIs (Needed for signin)

https://developer.android.com/studio/run/managing-avds.html

```sh
react-native run-android --appIdSuffix=debug
```

App now opens on device, but you will be prompted that the app want's to  draw overlay over other apps. Scroll down to our app and tick YES.
Go back to app, Command+M and hit Reload.