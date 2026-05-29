#!/usr/bin/env bash
set -euo pipefail

# FluentPath AI — Android App Bundle build script
# Produces: android/app/build/outputs/bundle/release/app-release.aab
#
# Prerequisites:
#   - Node.js 18+, npm
#   - Java 17+ (required by Gradle)
#   - Android SDK with build-tools installed (or run inside Android Studio)
#   - ANDROID_HOME env var pointing to your Android SDK directory
#
# First-time setup (run once):
#   npm install
#   npx cap add android          # generates the android/ project
#   npx cap sync android         # copies web assets into android/
#
# Signing (required for Play Store):
#   1. Generate a keystore (one-time):
#      keytool -genkey -v -keystore release.keystore \
#        -alias fluentpath -keyalg RSA -keysize 2048 -validity 10000
#   2. Copy android/keystore.properties.example → android/keystore.properties
#      and fill in your keystore path and passwords.
#   3. Uncomment the signingConfigs block in android/app/build.gradle (see README).

echo "==> [1/4] Building Next.js static export..."
npm run build

echo "==> [2/4] Syncing web assets to Android project..."
npx cap sync android

echo "==> [3/4] Building Android App Bundle (release)..."
cd android
./gradlew bundleRelease

echo "==> [4/4] Done!"
AAB_PATH="app/build/outputs/bundle/release/app-release.aab"
if [ -f "$AAB_PATH" ]; then
  echo ""
  echo "✅  App Bundle ready:"
  echo "    android/$AAB_PATH"
  echo ""
  echo "Upload this file to Google Play Console → Production / Internal Testing."
else
  echo "⚠️  Build succeeded but .aab not found at expected path: android/$AAB_PATH"
  echo "    Check the Gradle output above for the actual output location."
fi
