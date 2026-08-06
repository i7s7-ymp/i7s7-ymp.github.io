// YAML モジュール宣言
// Astro Frontmatter / Vite (@rollup/plugin-yaml) で .yml/.yaml を import 可能にする型定義

declare module '*.yml' {
	// 型を細かく付けたい場合は適宜 interface を差し替える
	const value: unknown;
	export default value;
}

declare module '*.yaml' {
	const value: unknown;
	export default value;
}
