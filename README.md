# i7s7-ymp Portfolio

[![Deploy Status](https://github.com/i7s7-ymp/i7s7-ymp.github.io/workflows/Deploy%20Astro%20site%20to%20GitHub%20Pages/badge.svg)](https://github.com/i7s7-ymp/i7s7-ymp.github.io/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro-5.12-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)](https://tailwindcss.com/)

ポップ × ダークシティ調の控えめネオンを組み合わせた **静的ポートフォリオサイト**。グラデーション背景はパフォーマンス優先で CSS レイヤ & 最小限アニメのみ。

🌐 **Live Site**: [https://i7s7-ymp.github.io](https://i7s7-ymp.github.io)

## � Docs

| Topic             | Doc                     |
| ----------------- | ----------------------- |
| Architecture      | `docs/architecture.md`  |
| Design System     | `docs/design-system.md` |
| Testing & Quality | `docs/testing.md`       |
| Runbook / Ops     | `docs/runbook.md`       |
| Contributing      | `docs/contributing.md`  |

## � Quick Start

前提: Node.js 18+, npm, Git

```bash
git clone https://github.com/i7s7-ymp/i7s7-ymp.github.io.git
cd i7s7-ymp.github.io
npm install
npm run dev
```

http://localhost:3000 を開く。

## 🏗 Overview

- Astro static export / GitHub Pages deploy
- Content = YAML (versioned, reviewable)
- Tailwind + tokens.css (design tokens集中)
- 背景: 2 CSS アニメレイヤ (低彩度 / prefers-reduced-motion 対応)
- Dark only / 最小クライアント JS ポリシー

詳細は docs/ を参照。ライセンス: [MIT](LICENSE)

## 🚀 Branch & Release Workflow

| 種別           | 命名例                | 備考                 |
| -------------- | --------------------- | -------------------- |
| 機能           | `feat/short-desc`     | UI/データ追加        |
| 修正           | `fix/issue-###`       | Issue 番号紐付け推奨 |
| デザイン微調整 | `chore/style-bg-tune` | アニメ/トークン調整  |
| ドキュメント   | `docs/readme-runbook` | README / ガイド更新  |

main へマージで GitHub Actions が自動ビルド & Pages 反映。

## � Performance / Accessibility / Quality Gates

| 指標            | 目標 (参考値)        | 備考                             |
| --------------- | -------------------- | -------------------------------- |
| LCP             | < 2.5s (初回視認)    | 画像圧縮 / クリティカル CSS 最小 |
| CLS             | < 0.05               | 動的挿入時は固定サイズ確保       |
| Lighthouse Acc. | 90+                  | aria 属性・コントラスト維持      |
| JS Bundle       | ~最小 (Astro 部分的) | 不要クライアント JS 回避         |

運用ルール: 新規コンポーネントは SSR (no client hydration) がデフォルト。必要なときのみ `client:*` 指定。

## 🧾 Runbook (代表シナリオ)

| タスク                 | 手順概要                                                              |
| ---------------------- | --------------------------------------------------------------------- |
| 新しい実績カード追加   | `achievements.yml` 末尾へ追加 → Home/Achievements ページ表示確認      |
| ソーシャルリンク順変更 | `social.yml` 並び替え → dev 確認                                      |
| 背景色微調整           | `Layout.astro` の `.main-scroll` 基底グラデのみ編集 → スクショ添付 PR |
| 画像追加               | `public/` へ配置 (SVG 推奨) → ページ参照                              |
| 図差し替え             | 最適化 SVG で上書き → PR に Before/After                              |
| README 更新            | 該当セクション編集 → `docs/` への二重記載避ける                       |

## 🐞 Troubleshooting

| 症状                 | 原因候補                           | 解決策                                                       |
| -------------------- | ---------------------------------- | ------------------------------------------------------------ |
| `npm run dev` 失敗   | 破損した npm キャッシュ / 依存破損 | `rm -rf node_modules package-lock.json && npm install`       |
| YAML import error    | 型宣言未含有                       | `src/types/yaml.d.ts` / `tsconfig.json` の include を確認    |
| 予期せぬ FOUC        | 背景アニメ計算コスト               | アニメ duration 延長 or opacity 減                           |
| 文字コントラスト低下 | 背景輝度上げすぎ                   | radial alpha / sweep opacity を下げる                        |
| Visual test 差分多発 | キャプチャ基準古い                 | 差分確認後 `npx playwright test --update-snapshots` (許容時) |

## 🗑️ Removed / Deprecated

| 要素                   | 状態                    | 理由                                   |
| ---------------------- | ----------------------- | -------------------------------------- |
| Uptime ピル            | 削除                    | 実用価値低 / ヘッダ密度削減            |
| Geek モードトグル      | 削除 (スタイル残骸一部) | 切替頻度低 / UI シンプル化             |
| 自動図生成パイプライン | 廃止                    | 決定性/保守性の課題 (上記ポリシー参照) |

将来クリーンアップ: 未使用 `theme-geek` スタイルを段階的削除予定 (残しているのは再導入検証容易化のため)。

## 🔐 Security / Dependency Updates

Dependabot (未設定) 代替として月次で: `npm outdated` → minor/patch 更新 → ビルド / ビジュアルテスト → PR。

## 🧭 PR Checklist (変更方針)

1. 不要なクライアント JS を追加していないか
2. トークンを使わず直値を足していないか
3. 背景アニメ輝度/彩度が可読性を損なっていないか
4. YAML スキーマ破壊 (既存キー削除) を行っていないか
5. `npm run check` が success か
6. (UI変更) スクショ / visual diff を PR に添付したか
7. ドキュメント必要なら README 更新含めたか

---

運用に関する不足点・自動化希望があれば Issue で提案してください。

## 🔧 Configuration

### 開発環境

プロジェクトはDev Containerに対応しています：

```bash
# VS CodeでDev Containerを開く
code .
# "Reopen in Container"を選択
```

### 環境変数

現在、環境変数は使用していませんが、必要に応じて`.env`ファイルを作成してください。

### ポート設定

- **開発サーバー**: `3000` (astro.config.mjsで設定)
- **プレビューサーバー**: `4321` (Astroデフォルト)

## 🚢 Deployment

### 自動デプロイ

GitHub Actionsを使用してmainブランチへのプッシュ時に自動デプロイされます：

1. コードをmainブランチにプッシュ
2. GitHub Actionsが自動実行
3. サイトがGitHub Pagesにデプロイ

### 手動デプロイ

```bash
# ビルド
npm run build

# 生成されたdist/フォルダをデプロイ先にアップロード
```

## 🧪 Quality Assurance

### 静的解析

```bash
# TypeScript型チェック
npm run type-check

# ESLint (JavaScript/TypeScript)
npm run lint

# Prettier (フォーマット)
npm run format:check

# 全チェック実行
npm run check
```

### CI/CD Pipeline

- ✅ **TypeScript型チェック**
- ✅ **ESLintコード解析**
- ✅ **Prettierフォーマット**
- ✅ **Astroビルド検証**
- ✅ **自動デプロイ**

## 📄 Pages Overview

| Page          | Route           | Description                                  |
| ------------- | --------------- | -------------------------------------------- |
| Home          | `/`             | プロフィール概要と最近のハイライト           |
| Architecture  | `/support`      | クラウド / アプリケーションアーキテクチャ    |
| Achievements  | `/achievements` | 職歴・資格・実績                             |
| Social Media  | `/social`       | SNSリンクとコンタクト                        |
| AI Chatbot    | `/chatbot`      | シングルスクリーンのインタラクティブチャット |
| Design System | `/design`       | デザインユーティリティ & ガイド              |

## 🎨 Design System

詳細ガイド: `/design` ページにライブプレビュー。

### コアユーティリティ

- `section-card`: 主要セクションコンテナ（グラデ + border + blur + hover scale）
- `stat-card`: KPI/数値指標カード (section-card 継承)
- `panel-title` / `gradient-heading-sm`: 見出し用グラデテキスト
- `badge-pill`: タグ/ラベル表示ピル
- `subtle-divider`: グラデーション区切り線
- `hide-scrollbar`: スクロールは保持しつつスクロールバー非表示

### コンポーネント (src/components)

- `SectionCard.astro`: セマンティックタグ指定可能なラッパー
- `StatCard.astro`: 数値 + ラベル表示用

### カラートークン (Tailwind 拡張 `accent-*`)

`pink | cyan | neon | gold | coral | blue | indigo | purple`

例: `text-accent-cyan`, `from-accent-pink to-accent-cyan`, `bg-accent-neon/30`

### テーマ

本サイトは現在 **ダークモード固定** です。以前存在したライトモードおよびテーマトグルUI/スクリプトは削除し、スタイルは `dark` 前提で最適化されています。

### 設計原則

1. レイアウト枠は再利用（section-card）で統一
2. 動的クラスは `tailwind.config.mjs` の `safelist` へ追加
3. 未使用クラス速やか削除で CSS を最小化
4. 色コントラストを確保し可読性維持
5. 追加ユーティリティは `/design` ページで文書化

### Chart Design Tokens (Stage5)

チャート/統計可視化まわりは `src/styles/tokens.css` に集約された CSS カスタムプロパティで管理しています。ゼロレグリファクタを支える層別けは以下。

| Category              | Prefix / Examples                                                                                                        | Purpose                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| Spacing / Axis        | `--chart-axis-left`, `--bar-gap(-md/-sm)`                                                                                | 軸オフセットと群間隔のレスポンシブ制御     |
| Bar Dimensions        | `--bar-width`, `--h` (inline var)                                                                                        | 棒幅/高さ計算用基準                        |
| Gradients (Stops)     | `--bar-cyan-start/end`                                                                                                   | 個別色の開始/終了色定義                    |
| Gradients (Composite) | `--bar-grad-cyan`                                                                                                        | 実際に適用される完成グラデ (fallback 付き) |
| Shadows               | `--shadow-bar`, `--shadow-bar-hover`, `--shadow-bar-active`, `--shadow-badge-*`, `--shadow-toggle-*`, `--shadow-tooltip` | 影レイヤ統一とホバー/アクティブ差分管理    |
| Pills / Toggles       | `--pill-bg(-hover/-active)`, `--toggle-bg(-active)`                                                                      | バッジ/トグルのガラスモーフ状態            |
| Bar Value Tooltip     | `--bar-value-bg`, `--bar-value-border`, `--bar-value-fg`, `--bar-value-bg-alt` ほか                                      | 値ツールチップと high 状態差分             |
| Note Panel            | `--chart-note-bg`, `--chart-note-border`, `--chart-note-fg`                                                              | 補足説明パネルの背景/枠/文字色             |
| Grid / Axis Lines     | `--grid-line-gradient`, `--axis-x-gradient`                                                                              | 線のフェードと奥行き感                     |
| Scrollbar             | `--scrollbar-track-bg`, `--scrollbar-thumb-bg`                                                                           | 横スクロールのダークテーマ調整             |
| Radius Scale          | `--radius-xs/sm/md/lg/xl/pill`                                                                                           | 一貫した角丸スケール。`pill` は完全円弧    |
| Blur Scale            | `--blur-xs/sm/md`                                                                                                        | 背景ブラー段階 (ガラス表現)                |
| Neutral Palette (WIP) | `--neutral-*`                                                                                                            | 将来のテーマ/明度調整用占位                |

利用指針:

1. 直接色値/px値を書かずトークン参照する (段階的テーマ拡張が容易)
2. 新規トークンはカテゴリーコメント直下に追加し README へ反映
3. 既存トークン差し替え時は fallback を保持し視覚差分を最小化
4. DOM 構造変更はトークン完備後に parity harness (support.astro 内) で構造差分ゼロを確認

将来拡張 (案):

- Light / High-contrast バリアントトークンセット
- Semantic 色層 (例: `--color-positive` -> グラデマッピング) の分離
- スクリーンショット比較自動化 (Playwright + pixelmatch) でゼロレグ CI

開発時は `tokens.css` を基準に差分レビューすることで、スタイリング意図 (ローカル調整 vs グローバルテーマ拡張) を識別しやすくなります。

## 🗺️ Architecture Diagram Policy

本リポジトリでは以前 **PlantUML + Kroki を用いた自動図生成パイプライン** ( `scripts/gen-arch-diagrams.mjs` と `public/diagrams/generated/` ) を試験導入しましたが、以下の理由で撤廃し、手動メンテナンス方針に統一しました。

- 外部 includes (C4-PlantUML / AWS Icons) の可用性とバージョン揺れによる非決定性
- CI / ローカル差異 (PlantUML 有無・Java ランタイム) に起因する再現性低下
- 図の表現品質を細かく調整 (余白整理 / 命名 / ローカライズ) する際に自動再生成が衝突
- ポートフォリオ用途では “安定した最終アセット” のほうがレビューフロー簡潔

### 現在の運用

| ディレクトリ                 | 役割                                         |
| ---------------------------- | -------------------------------------------- |
| `public/diagrams/`           | 手動で最適化した最終 SVG（カードで直接参照） |
| `public/diagrams/generated/` | (削除済) 旧自動生成成果物置き場。再作成禁止  |

### コントリビューション指針

1. 新規図は任意のツール（例: Excalidraw / Figma / manually edited SVG）で作成し **SVG 最適化** (不要 metadata / inline styles 最小化) を行ってから `public/diagrams/` に追加
2. 既存図を差し替える場合は視覚差分 (主要レイアウト/要素名称) がある際に PR 説明へ “Before / After” スクリーンショットを添付
3. `generated` サブディレクトリや PlantUML ソース (`*.puml`) を新規追加しない
4. 自動化再導入を検討する場合は Issue を立て、決定性確保 (ローカル完全 vendor 化 / icon キャッシュ) の設計提案を添付

### 追加禁止リスト (守れない場合 CI ルール化予定)

- `scripts/gen-arch-diagrams.mjs` の復活
- `public/diagrams/generated/` 以下の再作成
- ビルド時に外部ネットワークへ依存する図生成ステップ

これにより、図は “安定アセット” として扱われ、ページビルドは純粋な静的生成を維持します。

## 🤝 Contributing

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

### 開発ガイドライン

- TypeScriptを使用
- ESLintルールに従う
- Prettierでフォーマット
- コミット前に`npm run check`を実行

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
