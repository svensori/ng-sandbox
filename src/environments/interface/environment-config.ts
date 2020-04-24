export interface EnvironmentConfig {
  production: boolean;
  pusher: PusherConfig;
  agm: AGM;
}

interface PusherConfig {
  app_id: string;
  key: string;
  secret: string;
  cluster: string;
}

interface AGM {
  apiKey: string;
}
