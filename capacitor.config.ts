import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test-menu-ng-mod',
  webDir: 'www/browser',
  android: {
    adjustMarginsForEdgeToEdge: 'auto',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
    },
  },
};

export default config;
