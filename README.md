# i7s7-ymp Portfolio

[![Deploy Status](https://github.com/i7s7-ymp/i7s7-ymp.github.io/workflows/Deploy%20Astro%20site%20to%20GitHub%20Pages/badge.svg)](https://github.com/i7s7-ymp/i7s7-ymp.github.io/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro-5.12-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)](https://tailwindcss.com/)

Geekスタイルのポートフォリオサイト。ターミナル風UIとダークモードを特徴とするモダンなWebサイトです。

🌐 **Live Site**: [https://i7s7-ymp.github.io](https://i7s7-ymp.github.io)

## ✨ Features

- 🖥️ **ターミナル風UI** - 本格的なコマンドライン体験
- 🌙 **ダークモード** - 目に優しいダークテーマ
- 📱 **レスポンシブデザイン** - すべてのデバイスで最適表示
- ⚡ **高速パフォーマンス** - Astroの静的サイト生成
- 🤖 **インタラクティブチャット** - AIエージェント風UI
- 🎨 **モダンスタイリング** - Tailwind CSSベース
- 🔧 **開発者フレンドリー** - TypeScript + ESLint + Prettier

## 🏗️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - 静的サイトジェネレーター
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- **Font**: [JetBrains Mono](https://www.jetbrains.com/mono/) - プログラミング用フォント
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
│   │   ├── design.astro   # Design Portfolio
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

| Page         | Route           | Description              |
| ------------ | --------------- | ------------------------ |
| Home         | `/`             | プロフィールとスキル概要 |
| Design       | `/design`       | デザインポートフォリオ   |
| Achievements | `/achievements` | 職歴・資格・実績         |
| Social Media | `/social`       | SNSリンクとコンタクト    |
| AI Agent     | `/agent`        | インタラクティブチャット |

## 🎨 Design System

### カラーパレット

- **Primary**: Green (`#10b981`) - ターミナルテーマ
- **Background**: Dark Gray (`#111827`, `#1f2937`)
- **Text**: Light Gray (`#d1d5db`, `#9ca3af`)
- **Accent**: Yellow (`#fbbf24`), Blue (`#3b82f6`)

### Typography

- **Main**: JetBrains Mono (monospace)
- **Fallback**: Inter (sans-serif)

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

## 📝 License

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 🔗 Links

- **Portfolio**: [https://i7s7-ymp.github.io](https://i7s7-ymp.github.io)
- **GitHub**: [https://github.com/i7s7-ymp](https://github.com/i7s7-ymp)
- **Astro Docs**: [https://docs.astro.build](https://docs.astro.build)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
