import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ai.fluentpath.app',
  appName: 'FluentPath AI',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
  android: {
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'fluentpath',
    },
  },
};

export default config;
