# FisherSafe Android APK Project

This is a student-project version of FisherSafe prepared for packaging as an Android APK with Capacitor.

## What it includes

- Mobile-first FisherSafe interface
- Offline local threat history
- Accelerometer and motion monitoring
- Gyroscope/rotation monitoring
- Device orientation
- GPS
- Battery status where supported
- Microphone permission check
- Rule-based explainable threat detection
- Manual threat classification
- Emergency message generation
- SMS handoff to the phone messaging application
- Copy/share emergency message
- CSV and JSON export

## Important

This is a research prototype. It is not a certified maritime emergency system.

## Build without Android Studio

The included GitHub Actions workflow can build a debug APK in the cloud.

1. Create a free GitHub account.
2. Create a new repository.
3. Upload all files from this project.
4. Open the repository's **Actions** tab.
5. Select **Build FisherSafe APK**.
6. Click **Run workflow**.
7. Wait for the build to finish.
8. Open the completed workflow run.
9. Download the **FisherSafe-debug-apk** artifact.
10. Extract it and install `app-debug.apk` on your Android phone.

You may need to allow installation from unknown sources on the phone.

## Local testing

If Node.js is installed:

```bash
npm install
npx cap add android
npx cap copy android
```

The Android build itself can be performed by GitHub Actions, so Android Studio is not required on your PC.

## Sensor note

The web sensor APIs used by the current prototype depend on Android WebView/device support. The APK is structured so native Capacitor plugins can be added later if a particular phone does not expose a sensor through WebView.

## Emergency SMS

The SMS button opens the phone's messaging application with a prefilled recipient and message. The user must review and press Send. Direct silent SMS transmission is intentionally not implemented in this student prototype.
