declare namespace NodeJs {
  export interface ProcessEnv {
    POSTGRES_URL: string;
    REDIS_URL: string;
    PORT: number;
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
  }
}
