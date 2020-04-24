import { EnvironmentConfig } from './interface/environment-config';

export const environment: EnvironmentConfig = {
  production: false,
  pusher: {
    app_id: '987949',
    key: 'ae76d17749f7d459a7ef',
    secret: '4d3f2ac2afa8e5d386bc',
    cluster: 'ap1'
  },
  agm: {
    apiKey: 'AIzaSyB6C4chhrR2SyusPKruPil7m-CKl3U4UeI'
  }
};
