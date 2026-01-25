interface ImportMetaEnv {
  readonly PUBLIC_MAPBOX_TOKEN: string;
  readonly PUBLIC_MAPBOX_STYLE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
