import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fishersafe.app',
  appName: 'FisherSafe',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  }
};

export default config;
