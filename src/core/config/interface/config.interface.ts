interface DbConfiguration {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface IConfig {
  port: string;
  rabbitUrl: string;
  db: DbConfiguration;
}
