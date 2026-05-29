# FluentPath AI — Google Play Publishing Guide

This guide walks you through signing the Android App Bundle and uploading it to Google Play Console.

---

## 1. Prerequisites

| Tool | Version | Check |
|------|---------|-------|
| Node.js | 18+ | `node -v` |
| Java (JDK) | 17+ | `java -version` |
| Android SDK | latest | `$ANDROID_HOME` set |
| Gradle | bundled | via `./gradlew` |

Install the Android SDK via [Android Studio](https://developer.android.com/studio) or the command-line tools.  
Set `ANDROID_HOME` in your shell profile:

```bash
export ANDROID_HOME=$HOME/Android/Sdk          # Linux
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

---

## 2. First-time Capacitor setup (run once)

```bash
npm install
npx cap add android    # generates the android/ Gradle project
npx cap sync android   # copies the Next.js static export into android/
```

---

## 3. Generate a release keystore (run once, keep it safe)

```bash
keytool -genkey -v \
  -keystore release.keystore \
  -alias fluentpath \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

You will be prompted for:
- First/last name, organisation, city, country
- A **keystore password** (remember this — you cannot recover it)
- A **key password** (can be the same as keystore password)

> ⚠️ **Never commit `release.keystore` or `keystore.properties` to Git.**  
> Add both to `.gitignore`. Store them in a password manager or secrets vault.

---

## 4. Configure signing in Gradle

Copy the example properties file and fill in your values:

```bash
cp android/keystore.properties.example android/keystore.properties
# edit android/keystore.properties with your paths and passwords
```

Then open `android/app/build.gradle` and add/uncomment the signing config:

```groovy
// At the top of the android block, load keystore.properties:
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))

android {
    ...
    signingConfigs {
        release {
            storeFile     file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
            keyAlias      keystoreProperties['keyAlias']
            keyPassword   keystoreProperties['keyPassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

---

## 5. Build the App Bundle

```bash
npm run build:android
# or step by step:
npm run build            # Next.js static export → out/
npx cap sync android     # copy web assets into android/
cd android
./gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

---

## 6. Create a Google Play Console account

1. Go to [play.google.com/console](https://play.google.com/console)
2. Pay the one-time $25 developer registration fee
3. Complete identity verification

---

## 7. Create a new app in Play Console

1. Click **Create app**
2. Fill in:
   - **App name**: FluentPath AI
   - **Default language**: English (United States)
   - **App or game**: App
   - **Free or paid**: Free (or Paid)
3. Accept the declarations and click **Create app**

---

## 8. Prepare store listing

Navigate to **Store presence → Main store listing** and fill in:

| Field | Value |
|-------|-------|
| App name | FluentPath AI |
| Short description | Fix your Spanish instantly with AI corrections and explanations. |
| Full description | (see marketing/landing_page_copy.md) |
| App icon | 512×512 PNG, no alpha |
| Feature graphic | 1024×500 PNG |
| Screenshots | At least 2 phone screenshots (minimum 320px, max 3840px) |

---

## 9. Set up app content ratings

Go to **Policy → App content** and complete:
- Content rating questionnaire (likely rated **Everyone**)
- Target audience (likely 13+)
- Data safety form (declare what data you collect)

---

## 10. Upload the App Bundle

1. Go to **Testing → Internal testing** (recommended for first upload)
2. Click **Create new release**
3. Click **Upload** and select `android/app/build/outputs/bundle/release/app-release.aab`
4. Add release notes (e.g. "Initial release")
5. Click **Save** then **Review release**
6. Click **Start rollout to Internal testing**

---

## 11. Promote to Production

Once internal testing is complete:

1. Go to **Production → Releases**
2. Click **Create new release**
3. Promote the tested bundle or upload a new one
4. Set rollout percentage (start with 20% recommended)
5. Click **Start rollout to Production**

---

## 12. App Bundle vs APK

Google Play requires **App Bundle (.aab)** format since August 2021 for new apps. The bundle is smaller than an APK — Play optimises it per device at delivery time. Never upload a raw APK for new Play Store apps.

---

## 13. Troubleshooting

| Issue | Fix |
|-------|-----|
| `ANDROID_HOME not set` | Set env var pointing to Android SDK |
| `SDK location not found` | Create `android/local.properties` with `sdk.dir=/path/to/sdk` |
| `Keystore not found` | Verify path in `keystore.properties` is relative to `android/` |
| `API routes return 404` | Expected — static export disables Next.js API routes. Deploy the web app separately and set `NEXT_PUBLIC_API_BASE_URL` |
| `Images broken` | Check `next.config.js` has `images: { unoptimized: true }` |

---

## 14. Useful commands

```bash
# Check connected devices/emulators
adb devices

# Install debug build on device
cd android && ./gradlew installDebug

# View Gradle build variants
cd android && ./gradlew tasks | grep bundle

# Clean build
cd android && ./gradlew clean
```
