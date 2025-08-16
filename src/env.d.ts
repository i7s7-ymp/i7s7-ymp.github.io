/// <reference types="astro/client" />
// YAMLモジュールを緩くanyとして扱う (ESLint parserエラー回避)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type YamlGeneric = any;
// @ts-ignore
declare const _: YamlGeneric; // sentinel to keep file a module
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ImportMeta {
  // allow importing arbitrary yml/yaml (fallback any)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  glob(pattern: string): any;
}
