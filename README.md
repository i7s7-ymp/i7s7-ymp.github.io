# i7s7-ymp Portfolio

[![Deploy Status](https://github.com/i7s7-ymp/i7s7-ymp.github.io/workflows/Deploy%20Astro%20site%20to%20GitHub%20Pages/badge.svg)](https://github.com/i7s7-ymp/i7s7-ymp.github.io/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro-5.12-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)](https://tailwindcss.com/)

YOASOBI風ポップでシティ系デザインのポートフォリオサイト。紫とネオンカラーを基調とした現代的なWebサイトです。

🌐 **Live Site**: [https://i7s7-ymp.github.io](https://i7s7-ymp.github.io)

## ✨ Features

- 🎨 **ポップデザイン** - YOASOBI風の鮮やかなカラーパレット
- 🌆 **シティ風UI** - 紫とネオンのグラデーション背景
- ✨ **アニメーション** - グロー効果とフローティング要素
- 📱 **レスポンシブデザイン** - すべてのデバイスで最適表示
- ⚡ **高速パフォーマンス** - Astroの静的サイト生成
- 🔮 **インタラクティブUI** - ホバー効果とアニメーション
- 🧊 **現代的スタイリング** - グラデーション & ガラスモーフィズム
- 🔧 **開発者フレンドリー** - TypeScript + ESLint + Prettier

## 🏗️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - 静的サイトジェネレーター
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- **Font**: [JetBrains Mono](https://www.jetbrains.com/mono/) + [Inter](https://rsms.me/inter/) - モダンフォント
- **Deployment**: [GitHub Pages](https://pages.github.com/) - 自動デプロイ
- **CI/CD**: [GitHub Actions](https://github.com/features/actions) - 継続的インテグレーション

## 🚀 Quick Start

### 前提条件

- Node.js 18+
- npm or yarn
- Git

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/i7s7-ymp/i7s7-ymp.github.io.git
cd i7s7-ymp.github.io

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

サイトは [http://localhost:3000](http://localhost:3000) で確認できます。

## 📁 Project Structure

```text
/
├── .devcontainer/          # Dev Container設定
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── .vscode/               # VS Code設定
├── public/                # 静的アセット
├── src/
│   ├── components/        # 再利用可能コンポーネント
│   ├── layouts/           # レイアウトコンポーネント
│   │   └── Layout.astro   # メインレイアウト
│   ├── pages/             # ページファイル
│   │   ├── index.astro    # Home
│   │   ├── support.astro  # Architecture & Support
│   │   ├── achievements.astro # Achievements
│   │   ├── social.astro   # Social Media
│   │   └── agent.astro    # AI Agent
│   └── styles/            # スタイルファイル
├── astro.config.mjs       # Astro設定
├── tailwind.config.mjs    # Tailwind CSS設定
├── tsconfig.json          # TypeScript設定
├── eslint.config.js       # ESLint設定
├── .prettierrc            # Prettier設定
└── package.json
```

## 🛠️ Development Commands

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm install`          | 依存関係をインストール                     |
| `npm run dev`          | 開発サーバーを起動 (http://localhost:3000) |
| `npm run build`        | 本番用ビルドを作成                         |
| `npm run preview`      | ビルド結果をローカルでプレビュー           |
| `npm run type-check`   | TypeScript型チェック                       |
| `npm run lint`         | ESLintによるコード解析                     |
| `npm run lint:fix`     | ESLintエラーの自動修正                     |
| `npm run format`       | Prettierによるコードフォーマット           |
| `npm run format:check` | フォーマット状態の確認                     |
| `npm run check`        | 全体的なコード品質チェック                 |

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
| AI Agent      | `/agent`        | シングルスクリーンのインタラクティブチャット |
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

## � Issue & Pull Request Templates

このプロジェクトでは、一貫性のある報告とレビューのためにテンプレートを使用しています。

### 📝 Issue Templates

#### 🐛 Bug Report

バグや問題を報告する際に使用してください。

**含まれる項目:**

- 問題の詳細説明
- 再現手順
- 期待される動作 vs 実際の動作
- ブラウザ・デバイス情報
- 環境詳細
- スクリーンショット

**使用方法:**

1. [Issues](https://github.com/i7s7-ymp/i7s7-ymp.github.io/issues)ページにアクセス
2. "New issue"をクリック
3. "🐛 Bug Report"を選択
4. テンプレートに従って入力

#### ✨ Feature Request

新機能や改善提案の際に使用してください。

**含まれる項目:**

- 機能の概要と動機
- 詳細説明とユーザーストーリー
- 優先度とカテゴリ
- 受け入れ基準
- モックアップ・技術考慮事項

#### 📚 Documentation

ドキュメント改善の提案に使用してください。

**含まれる項目:**

- ドキュメントの種類
- 現在の問題点
- 提案する変更
- 対象読者

### 📋 Pull Request Templates

#### 標準PR Template

すべての通常の変更に使用してください。

**含まれる項目:**

- 変更概要と関連Issue
- 詳細な変更内容
- テスト項目とブラウザ確認
- スクリーンショット
- 破壊的変更の有無
- レビューポイント

**使用方法:**

1. ブランチから Pull Request を作成
2. テンプレートが自動で適用されます
3. 各項目を埋めてください

#### 🚨 Hotfix Template

緊急修正の際に使用してください。

**含まれる項目:**

- 緊急修正の概要
- 問題詳細と影響範囲
- 修正内容とリスク評価
- 最小限のチェックリスト

**使用方法:**

1. Hotfix用のブランチから PR を作成
2. URLに `?template=hotfix.md` を追加
3. または手動でテンプレートを選択

### 🔗 テンプレート設定ファイル

```text
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml      # バグレポート
│   ├── feature_request.yml # 機能要求
│   ├── documentation.yml   # ドキュメント
│   └── config.yml          # 設定・リンク
└── PULL_REQUEST_TEMPLATE/
    ├── pull_request_template.md  # 標準PR
    └── hotfix.md                 # 緊急修正PR
```

### 💡 テンプレート使用のメリット

- **一貫性**: 必要な情報が漏れなく収集
- **効率性**: 標準化されたフォーマットで迅速なレビュー
- **品質管理**: チェックリストによる品質保証
- **自動分類**: ラベルによる適切な分類
- **トレーサビリティ**: Issue とPR の明確な関連付け

### 📝 コントリビューションフロー

1. **Issue作成**: 適切なテンプレートでIssueを作成
2. **ブランチ作成**: `feature/`, `bugfix/`, `hotfix/` のプレフィックス使用
3. **開発**: ローカルでの開発と品質チェック
4. **PR作成**: テンプレートを使用してPR作成
5. **レビュー**: テンプレート項目に基づくレビュー
6. **マージ**: 品質基準を満たした後にマージ

## 📝 License

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 🔗 Links

- **Portfolio**: [https://i7s7-ymp.github.io](https://i7s7-ymp.github.io)
- **GitHub**: [https://github.com/i7s7-ymp](https://github.com/i7s7-ymp)
- **Astro Docs**: [https://docs.astro.build](https://docs.astro.build)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
