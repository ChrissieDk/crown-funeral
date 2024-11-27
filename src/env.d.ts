/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POL_AUTH_TOKEN: string;
  readonly VITE_POL_CLIENT_NAME: string;
  // Add any other environment variables you might use later
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
